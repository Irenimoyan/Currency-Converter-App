import { useEffect, useMemo, useState } from "react";
import { convertAmount, listSymbols } from "../services/exchangeService";
import { useAuth } from "../Context/AuthContext";

export default function CurrencyConverter({ onConverted }) {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [result, setResult] = useState(null);
  const [symbols, setSymbols] = useState(["USD","EUR","GBP","NGN","JPY","CAD"]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    // Load full currency list once (fallback to defaults on fail)
    listSymbols().then(setSymbols).catch(()=>{});
  }, []);

  const canConvert = useMemo(() => {
    return amount && !isNaN(Number(amount)) && Number(amount) > 0;
  }, [amount]);

  async function handleConvert() {
    if (!canConvert) {
      setErr("Please enter a valid amount.");
      return;
    }
    setErr("");
    setLoading(true);
    try {
      const data = await convertAmount({ from: fromCurrency, to: toCurrency, amount });
      if (data?.result == null) throw new Error("No result");
      setResult(data.result);
      onConverted?.({
        amount: Number(amount),
        fromCurrency,
        toCurrency,
        result: data.result,
        at: new Date().toISOString(),
        userId: user?.uid || null,
      });
    } catch (e) {
      setErr("Failed to convert. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fmt = (v, code) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: code }).format(v);

  return (
    <div className="p-6 max-w-xl mx-auto bg-lightgray-600 rounded-2xl shadow-lg space-y-6 mt-6 place-items-center">
      <h2 className="text-2xl font-bold text-center">Currency Converter</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="number"
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        >
          {symbols.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        >
          {symbols.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>

        <button
          onClick={handleConvert}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Converting…" : "Convert"}
        </button>
      </div>

      {err && <p className="text-red-600 text-sm">{err}</p>}

      {result != null && (
        <p className="text-center text-lg font-semibold text-green-700">
          {fmt(Number(amount), fromCurrency)} = {fmt(result, toCurrency)}
        </p>
      )}

      {!user && (
        <p className="text-xs text-center text-gray-500">
          Tip: <span className="font-semibold ">Login</span> to save your conversion history.
        </p>
      )}
    </div>
  );
}

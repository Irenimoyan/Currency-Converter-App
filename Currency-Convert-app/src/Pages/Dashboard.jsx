import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { listenUserConversions, deleteConversion } from "../services/ConversionService";

export default function Dashboard() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) return;
    const unsub = listenUserConversions(user.uid, setItems);
    return () => unsub && unsub();
  }, [user]);

  const fmt = (v, code) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: code }).format(v);

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold mb-4">Your Conversion History</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">No conversions yet. Go to Home and make one.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it.id} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">
                  {new Date(it.at || it.createdAt?.toDate?.() || Date.now()).toLocaleString()}
                </span>
                <button
                  onClick={() => deleteConversion(it.id)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Delete
                </button>
              </div>
              <div className="font-semibold">
                {it.amount} {it.fromCurrency} → {it.result?.toFixed?.(2)} {it.toCurrency}
              </div>
              <div className="text-sm text-gray-600">
                {fmt(Number(it.amount || 0), it.fromCurrency)} = {fmt(Number(it.result || 0), it.toCurrency)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


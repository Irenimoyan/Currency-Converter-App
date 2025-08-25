import axios from "axios";

export async function convertAmount({ from, to, amount }) {
  const res = await axios.get("https://api.exchangerate.host/convert", {
    params: { from, to, amount }
  });
  // returns { result: number, success: boolean, ... }
  return res.data;
}

export async function listSymbols() {
  const res = await axios.get("https://api.exchangerate.host/symbols");
  // returns { symbols: { USD: {description}, ... } }
  return Object.keys(res.data.symbols || {});
}

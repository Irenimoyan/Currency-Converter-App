import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await register(email, password);
      nav("/dashboard");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-8 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Create account</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full shadow-lg p-3 rounded"
          placeholder="Email"
          type="email" value={email} onChange={e=>setEmail(e.target.value)}
        />
        <input
          className="w-full shadow-lg p-3 rounded"
          placeholder="Password"
          type="password" value={password} onChange={e=>setPassword(e.target.value)}
        />
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button className="w-full bg-blue-600 text-blue-500 shadow p-3 rounded">Register</button>
      </form>
      <p className="text-sm mt-3">
        Have an account? <Link to="/login" className="text-blue-600 underline">Login</Link>
      </p>
    </div>
  );
}

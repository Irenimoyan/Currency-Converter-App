import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-lg">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-black text-lg">💱 CONVERTIO</Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              <button onClick={logout} className="text-red-600 hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

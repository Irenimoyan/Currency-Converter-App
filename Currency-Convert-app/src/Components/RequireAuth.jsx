import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function RequireAuth({ children }) {
  const { user, ready } = useAuth();
  if (!ready) return <div className="p-4">Loading…</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

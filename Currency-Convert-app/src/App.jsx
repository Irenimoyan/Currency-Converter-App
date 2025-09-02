import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./pages/Register";
import Dashboard from "./Pages/Dashboard";
import RequireAuth from "./components/RequireAuth";

export default function App() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

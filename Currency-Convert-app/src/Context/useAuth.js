import { useContext } from "react";
import { useAuth as useAuthContext } from "./AuthContext";

export function useAuth() {
  return useAuthContext();
}

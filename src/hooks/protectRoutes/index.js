//I don't need the Outlet. I already have it inside the app layout
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "hooks/auth";

export function ProtectRoutes() {
  // Info: If the tokens exist, follow the application, if not redirect to the login screen.
  // Refactor: Instead of protecting the Outlet, I shall protect the App Layout component.
  // The login page does not change.

  const { cookies } = useAuth();

  return cookies.token ? <Outlet /> : <Navigate to="/login" exact />;
}

import { Link } from "react-router-dom";
import { useAuth } from "../lib/user_db";

export function NavBar() {
  const { user } = useAuth();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Blog
        </Link>
      </div>
      <div>
        {user ? (
          <Link to={"/new"}>
            <button className="btn btn-primary">Add</button>
          </Link>
        ) : (
          <div className="flex justify-center gap-3">
            <Link to={"/login"}>
              <button className="btn btn-primary">Log In</button>
            </Link>
            <Link to={"/register"}>
              <button className="btn btn-accent">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { useAuth } from "../lib/user_db";
import { useNavigate } from "react-router-dom";

export default function LogInPage() {
  const { logIn } = useAuth();
	const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    logIn(email, password);

		navigate("/")
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md space-y-3 rounded-lg p-8 shadow-md">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

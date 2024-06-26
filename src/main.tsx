import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar.tsx";
import LogInPage from "./pages/login.tsx";
import RegisterPage from "./pages/register.tsx";
import NewPostPage from "./pages/newPost.tsx";
import PostPage from "./pages/postPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="h-screen">
        <NavBar />
        <main className="h-full w-full p-6">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/new" element={<NewPostPage />} />
            <Route path="/post/:title" element={<PostPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);

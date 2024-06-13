import { create } from "zustand";

interface User {
  email: string;
  password: string;
  name: string;
  id: string;
}

interface UserStore {
  user?: User;
  logIn: (email: string, password: string) => void;
  register: (email: string, password: string, name: string) => void;
  logOut: () => void;
}

export const useAuth = create<UserStore>((set) => ({
  logIn: (email: string, password: string) => {
    const json = JSON.parse(localStorage.getItem("users") ?? "{}");
    const user = json[email];
    if (user == undefined) return;
    if (user.password !== password) return;

    set(() => ({ user: user }));
  },
  logOut: () => set(() => ({ user: undefined })),
  register: (email, password, name) => {
    const json = JSON.parse(localStorage.getItem("users") ?? "{}");
    if (json[email] != null) return;
    json[email] = { email, name, password, id: crypto.randomUUID() };
    localStorage.setItem("users", JSON.stringify(json));

    set(() => ({ user: json[email] }));
  },
}));

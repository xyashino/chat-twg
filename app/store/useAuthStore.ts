import { create } from "zustand";
import { ApolloClient } from "@apollo/client";
import { getAppolloClient } from "@/app/utils";
import { removeSecureValue, saveSecure } from "@/app/utils/secure";
import { User } from "@/app/types/login-user-response";

interface AuthStore {
  token: string | null;
  user: User | null;
  client: ApolloClient<any>;
  setToken: (token: string | null) => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  user: null,
  client: getAppolloClient(null),
  setToken: async (token) => {
    if (token) await saveSecure("token", token);
    else await removeSecureValue("token");
    set({ token, client: getAppolloClient(token) });
  },
  setUser: (user) => set({ user }),
}));

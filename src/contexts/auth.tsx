import React, { useState, useEffect } from "react";
import { createContext } from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-community/async-storage";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@RNAuth:user");
      const storageToken = await AsyncStorage.getItem("@RNAuth:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    }
    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user: user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

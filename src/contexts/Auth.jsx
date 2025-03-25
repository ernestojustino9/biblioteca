import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //Barar as rotas
  const navigate = useNavigate();
  //
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //
  useEffect(() => {
    //recuper o usuario logado no localStorege da aplicacao
    const recoveredUser = localStorage.getItem("user");
    //
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);
  //
  const login = (email, senha) => {
    console.log("login auth", { email, senha });
    // Api criar uma session
    const loggedUser = {
      id: "123",
      email,
    };
    //gravar o usuario logado(JSON.stringify para transformar em string)
    localStorage.setItem("user", JSON.stringify(loggedUser));
    //
    if (senha === "123456") {
      setUser(loggedUser);
      navigate("/");
    } else {
      toast.error("Email e a senha incoreto");
    }
  };

  // const logout = () => {
  //   console.log("logout");
  //   // Remover o usuario logado
  //   localStorage.removeItem("user");
  //   //
  //   setUser(null);
  //   navigate("/login");
  // };
  const logout = async () => {
    try {
      console.log("logout");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/login");
    } catch (error) {
      toast(error.message, {
        type: "error",
      });
    }
  };


  //
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
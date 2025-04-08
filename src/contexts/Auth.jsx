import { createContext, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { TOKEN_KEY, USER_KEY } from "../service/auth";
import { createSession } from "../service/UsuarioService";
import api from "../service/api";
import * as messages from "../components/message/toastr";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storageUser = Cookies.get(USER_KEY);
    const storageToken = Cookies.get(TOKEN_KEY);
    if (storageToken && storageUser) {
      setUser(JSON.parse(storageUser));
      api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;
    }
    setLoading(false);
  }, [status]);

  const signIn = async (dados) => {
    try {
      const { data } = await createSession(dados);
      const user = jwtDecode(data);

      // Verificar se o usuário tem a função de administrador
      if (user.roles && user.roles.includes('administrador') || user.roles.includes('funcionario')) {
        // Se o usuário for um administrador, continuar com o login normalmente
        const tokenExpAdmin = user.exp * 1000;
        Cookies.set(TOKEN_KEY, data);
        Cookies.set("tokenExpAdmin", tokenExpAdmin);
        setUser(user);
        Cookies.set(USER_KEY, JSON.stringify(user));
        Cookies.set(TOKEN_KEY, data);
        setStatus("Login successful");
        messages.mensagemSucesso("Login com sucesso!");
        navigate("/");
      } else {
        // Se o usuário não for um administrador, exibir uma mensagem de erro ou redirecionar para uma página de acesso negado
        messages.mensagemAlerta("Você não tem permissão para acessar esta área!");
      }
    } catch (error) {
      console.log(error);
      return messages.mensagemErro("Ocorreu um erro. Tente mais tarde!");
    }
  };

  const getOut = async () => {
    try {
      Cookies.remove("tokenExpAdmin");
      Cookies.remove(USER_KEY);
      Cookies.remove(TOKEN_KEY);
      setUser(null);
      setStatus("");
      navigate("/login")
    } catch (error) {
      messages.mensagemErro(error.message);
    }
  };


  const checkSessionExpiration = useCallback(() => {
    const tokenExpAdmin = Cookies.get("tokenExpAdmin");
    if (!tokenExpAdmin) {
      return;
    }
    const currentTime = Date.now();
    if (currentTime > parseInt(tokenExpAdmin)) {
      getOut();
      navigate("/login")
    }
  }, []);

  useEffect(() => {
    const sessionCheckInterval = setInterval(checkSessionExpiration, 60000);
    checkSessionExpiration();

    return () => {
      clearInterval(sessionCheckInterval);
    };
  }, [checkSessionExpiration]);

  // if (loading) return <Loading />;
  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, loading, signIn, getOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

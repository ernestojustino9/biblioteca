import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthProvider, AuthContext } from "./contexts/Auth";
import Home from "./pages/Home";
import Login from "./pages/admin/Login";
import NotFound from "./components/error/NotFound";

const AppRoutes = () => {
  // Pagina Privada
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    //Quando usuario nao tiver acesso e quizer acessar uma pagina volta no login

    // if (loading) {
    //   // return <div className="loading">Carregando, Aguarde...</div>;
    //   // return <div className="loading"></div>;
    //   return (
    //     <div id="inicio-loader">
    //       <div className="loader"></div>
    //       <div className="loading">Carregando...</div>
    //     </div>
    //   );
    // }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    //Se tiver pode acessar
    return children;
  };
  //
  return (
    <Router>
      {/*  */}
      <AuthProvider>
        <Routes>
          {/* Home Pege */}
          <Route
            exact
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          {/* Perfils */}
          {/* <Route
            exact
            path="/perfil/:email"
            element={
              <Private>
                <Perfils />
              </Private>
            }
          /> */}
          {/* Login */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;

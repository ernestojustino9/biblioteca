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
import Lirvos from "./pages/livros/Lirvos";
import Reserva from "./pages/reserva/Reserva";
import Emprestimo from "./pages/emprestimo/Emprestimo";
import Multa from "./pages/multa/Multa";

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
          <Route
            exact
            path="/livros"
            element={
              <Private>
                <Lirvos />
              </Private>
            }
          />
          <Route
            exact
            path="/reserva"
            element={
              <Private>
                <Reserva />
              </Private>
            }
          />
          <Route
            exact
            path="/emprestimo"
            element={
              <Private>
                <Emprestimo />
              </Private>
            }
          />
          <Route
            exact
            path="/multa"
            element={
              <Private>
                <Multa />
              </Private>
            }
          />
          {/* Login */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;

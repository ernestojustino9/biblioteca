import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "../contexts/Auth";
import Home from "../pages/Home";
import Login from "../pages/admin/Login";
import Categoria from "../pages/categorias/Categoria";
import Lirvos from "../pages/livros/Lirvos";
import Roles from "../components/roles/Roles";


const Routas = () => {
    const Private = ({ children, requiredRoles }) => {

        const { isAuthenticated, user, loading } = useContext(AuthContext);
        if (loading) {
            return (
                <div className="center-body">
                    <div className="spinner"></div>
                </div>
            );
        }

        if (!isAuthenticated) {
            return <Navigate to="/login" />;
        }

        // Verifica se o usuário possui as roles necessárias
        const userRoles = user.roles || [];
        const hasRequiredRoles = requiredRoles.some(role =>
            userRoles.includes(role)
        );

        if (!hasRequiredRoles) {
            // Se o usuário não tem as funções necessárias, redireciona para uma página de acesso negado
            return <Navigate to="/access-denied" />;
        }

        // Se tiver as funções necessárias, pode acessar
        return children;
    };
    //
    return (
        <Router>
            {/*  */}
            <AuthProvider>
                <Routes>
                    {/* Home Pege */}
                    <Route exact path="/" element={<Private requiredRoles={[Roles.ADMIN, Roles.AUTOR]}><Home /></Private>} />
                    <Route exact path="/categorias" element={<Private requiredRoles={[Roles.ADMIN]}><Categoria /></Private>} />
                    <Route exact path="/livros" element={<Private requiredRoles={[Roles.ADMIN]}><Lirvos /></Private>} />
                    {/*   <Route exact path="/editBanner/:id" element={<Private requiredRoles={[Roles.ADMIN]}><EditBanner /></Private>} />
          <Route exact path="/sobre" element={<Private requiredRoles={[Roles.ADMIN]}><Sobre /></Private>} />
          <Route exact path="/editSobre/:id" element={<Private requiredRoles={[Roles.ADMIN]}><EditSobre /></Private>} />
          <Route exact path="/skill" element={<Private requiredRoles={[Roles.ADMIN]}><Skill /></Private>} />
          <Route exact path="/editSkill/:id" element={<Private><EditSkill /></Private>} /> */}
                    {/* Login */}
                    <Route exact path="/login" element={<Login />} />
                    {/* <Route exact path="/perfil/:id" element={<Private requiredRoles={[Roles.ADMIN, Roles.AUTOR]}><Perfil /></Private>} /> */}
                    {/* <Route exact path="/user" element={<Private requiredRoles={[Roles.ADMIN, Roles.AUTOR]}><User /></Private>} /> */}
                    {/* <Route exact path="/viewUser/:userId" element={<Private requiredRoles={[Roles.ADMIN, Roles.AUTOR]}><ViewUser /></Private>} /> */}
                    {/* <Route exact path="/viewUserNCR/:id" element={<Private requiredRoles={[Roles.ADMIN, Roles.AUTOR]}><ViewUserNCR /></Private>} /> */}
                    {/* <Route exact path="*" element={<NotFound />} /> */}
                </Routes>
            </AuthProvider>
            {/* <Footer /> */}
        </Router>
    );
};

export default Routas;
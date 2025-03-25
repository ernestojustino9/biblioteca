import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/img/logo/logo.jpg";
import { AuthContext } from "../../contexts/Auth";
// import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  //
  const { authenticated, login } = useContext(AuthContext);
  //
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Botao de entrar
  const handleSumite = (e) => {
    e.preventDefault();
    console.log("submit", { email, senha });

    login(email, senha); // integracao com o meu contexto / API
  };
  //
  return (
    <div className="bg-gradient-primary">
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Biblioteca!</h1>
                      </div>
                      <form className="user" onSubmit={handleSumite}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Digite seu email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Digite a sua senha..."
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Entrar
                        </button>
                      </form>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

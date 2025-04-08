import React, { useState, useContext } from 'react'
import * as messages from "../../components/message/toastr";
import { AuthContext } from '../../contexts/auth';

const Login = () => {
  //
  const { signIn } = useContext(AuthContext);
  const [values, setValues] = useState({
    email: "",
    senha: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setValues({ ...values, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      signIn(values);
    } catch (error) {
      messages.mensagemErro(error, "Ocorreu um erro. Tente novamente!")
    }
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
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Digite seu email..."
                            // value={email}
                            name='email'
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Digite a sua senha..."
                            // value={senha}
                            name='senha'
                            onChange={handleChange}
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

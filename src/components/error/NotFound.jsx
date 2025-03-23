import React from "react";
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notFoundDiv">
      <h1 id="notFoundH1">Erro 401</h1>
      <p id="notFoundP">Não é possível acessar a essa página!</p>
    </div>
  );
};

export default NotFound;

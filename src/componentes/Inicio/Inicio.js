import React, { useState } from "react";
import "./style.css";
import Proyecto from "../../Shared/Proyecto/Proyecto";

const Inicio = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    //Validar formulario.
    if (usuario.trim() === "" || contraseña.trim() === "" || "") return;

    //Si no hay errores.
    //Crear Reserva.
    const user = {
      usuario,
      contraseña,
    };

    console.log("Antes de enviar: ", user);

    setUsuario("");
    setContraseña("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>
            Usuario Recepcionista <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Usuario"
            name="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            Contraseña de Recepcionista: <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            name="email"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>

        <div className="form-group text-center">
          <span className="font-weight-bold text-danger">
            * Campos Requeridos
          </span>
        </div>

        <button
          type="submit"
          className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
        >
          Ingresar
        </button>
      </form>

      <Proyecto />
    </div>
  );
};

export default Inicio;

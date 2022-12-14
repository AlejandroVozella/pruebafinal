import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditRecepcionista = ({ onEdit, recepcionistaEdit }) => {
  const [usuario, setUsuario] = useState(recepcionistaEdit.usuario);
  const [contraseña, setContraseña] = useState(recepcionistaEdit.contraseña);
  const [nombre, setNombre] = useState(recepcionistaEdit.nombre);
  const [apellido, setApellido] = useState(recepcionistaEdit.apellido);

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      usuario.trim() === "" ||
      contraseña.trim() === "" ||
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      ""
    )
      return;

    const recepcionista = {
      usuario,
      contraseña,
      nombre,
      apellido,
    };

    onEdit(recepcionista, recepcionistaEdit._id);

    setUsuario("");
    setContraseña("");
    setNombre("");
    setApellido("");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 p-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nueva Recepcionista
            </h2>

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
                  Contraseña de Recepcionista:{" "}
                  <span className="text-danger">*</span>
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

              <div className="form-group">
                <label>
                  Nombre: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Apellido: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="apellido"
                  name="name"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
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
                Aceptar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRecepcionista;

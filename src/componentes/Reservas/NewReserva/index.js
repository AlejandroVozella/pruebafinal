import React, { useState } from "react";
import { useSelector } from "react-redux";

const NewReserva = ({ onAdd }) => {
  // useState Se utiliza para setear los valores en los campos del formulario.
  const [nroReserva, setNroReserva] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [cliente, setCliente] = useState("");
  const [cabaña, setCabaña] = useState("");
  const [recepcionista, setRecepcionista] = useState("");

  // Acceder al state del Store! [!IMPORTANTE!]
  const { error } = useSelector((state) => state.reservas);

  const onSubmit = (e) => {
    e.preventDefault();
    //Validar formulario.
    if (
      nroReserva.trim() === "" ||
      fechaInicio.trim() === "" ||
      fechaFin.trim() === "" ||
      cliente.trim() === "" ||
      cabaña.trim() === "" ||
      recepcionista.trim() === ""
    )
      return;

    //Si no hay errores.
    //Crear Reserva.
    const reserva = {
      nroReserva,
      fechaInicio,
      fechaFin,
      cliente,
      cabaña,
      recepcionista,
    };

    console.log("Antes de enviar: ", reserva);

    onAdd(reserva);

    setNroReserva("");
    setFechaInicio("");
    setFechaFin("");
    setCliente("");
    setCabaña("");
    setRecepcionista("");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 p-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nueva Reserva
            </h2>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>
                  Numero de Reserva <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Numero de Reserva"
                  name="name"
                  value={nroReserva}
                  onChange={(e) => setNroReserva(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Reserva desde fecha: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fecha desde"
                  name="email"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Reserva desde fecha: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fecha hasta"
                  name="phone"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Cliente: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Id del Cliente"
                  name="name"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Cabaña: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Id de Cabaña"
                  name="email"
                  value={cabaña}
                  onChange={(e) => setCabaña(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Recepcionista: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Id de la ecepcionista"
                  name="phone"
                  value={recepcionista}
                  onChange={(e) => setRecepcionista(e.target.value)}
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
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReserva;

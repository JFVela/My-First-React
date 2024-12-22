import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton/Boton";
const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  //Nuevas variables para el equipo
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("Manejar envio");
    let datosEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    };
    registrarColaborador(datosEnviar);
  };

  const manejarEnvioEquipo = (evento) => {
    evento.preventDefault();
    console.log(titulo, color);
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar Foto"
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={setEquipo}
          equipos={props.equipos}
        />
        <Boton>Agregar</Boton>
      </form>
      <form onSubmit={manejarEnvioEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={setTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar Color exadecimal"
          required
          valor={color}
          actualizarValor={setColor}
          type="color"
        />
        <Boton>Registrar Equipó</Boton>
      </form>
    </section>
  );
};
export default Formulario;

import { useState } from "react";
//Importamos UUidjs
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./component/Header/Header";
import Formulario from "./component/Formulario/Formulario";
import MiOrg from "./component/MiOrg";
import Equipo from "./component/Equipo";
import Footer from "./component/Footer";

function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      nombre: "Juan Figueroa",
      puesto: "Ingeniero Sistemas",
      foto: "https://avatars.githubusercontent.com/u/129704208?v=4",
      equipo: "UX y Diseño",
      favorito: true,
    },
    {
      id: uuidv4(),
      nombre: "Juan Figueroa",
      puesto: "Ingeniero Sistemas",
      foto: "https://avatars.githubusercontent.com/u/129704208?v=4",
      equipo: "Data Science",
      favorito: false,
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorFondo: "#D9F7E9",
      colorPrimario: "#57C278",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorFondo: "#E8F8FF",
      colorPrimario: "#82CFFA",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorFondo: "#F0F8E2",
      colorPrimario: "#A6D157",
    },
    {
      id: uuidv4(),
      titulo: "DevOps",
      colorFondo: "#FDE7E8",
      colorPrimario: "#E06B69",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorFondo: "#FAE9F5",
      colorPrimario: "#DB6EBF",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorFondo: "#FFF5D9",
      colorPrimario: "#FFBA05",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorFondo: "#FFEEDF",
      colorPrimario: "#FF8A29",
    },
  ]);

  //ternario --> condicion ? se muestra : no se muestra
  const cambiar = () => {
    actualizarFormulario(!mostrarFormulario);
  };

  //Registrar colaboradores
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);
    //Spread operador
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Elimar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id);
    const nuevoColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    // console.log(nuevoColaboradores);
    actualizarColaboradores(nuevoColaboradores);
  };

  // Actualizar Color equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar Color", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log("Nuevo Equipo", nuevoEquipo);
    actualizarEquipos([...equipos, { id: uuidv4(), ...nuevoEquipo }]);
  };

  //Funcion like
  const like = (id) => {
    console.log("Like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <>
      <Header />
      {mostrarFormulario ? (
        ""
      ) : (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      {/* {mostrarFormulario && (
        <Formulario equipos={equipos.map((equipo) => equipo.titulo)} />
      )} */}
      <MiOrg cambiar={cambiar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;

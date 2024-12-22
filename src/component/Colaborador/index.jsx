import "./Colaborador.css";
// Icono de cerrar
import { IoIosCloseCircle } from "react-icons/io";
// Corazon lleno
import { FaHeart } from "react-icons/fa";
// Corazon vacio
import { FaRegHeart } from "react-icons/fa";

function Colaborador(props) {
  const { nombre, puesto, foto, equipo, id, favorito } = props.datos || {};
  const { colorPrimario, eliminarColaborador, like } = props;
  //Condicionales para favoritos
  return (
    <div className="colaborador">
      <IoIosCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      ></IoIosCloseCircle>
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <p>{puesto}</p>
        {favorito ? (
          <FaHeart color="red" onClick={() => like(id)} />
        ) : (
          <FaRegHeart  onClick={() => like(id)}  />
        )}
      </div>
    </div>
  );
}

export default Colaborador;

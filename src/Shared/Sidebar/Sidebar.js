import './style.css';
import { Link } from 'react-router-dom'

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                
                <li>
                    <Link to="/cabanas">Cabanas</Link>
                </li>
                <li>
                    <Link to="/clientes">Clientes</Link>
                </li>
                <li>
                    <Link to="/recepcionistas">Recepcionistas</Link>
                </li>
                <li>
                    <Link to="/reservas">Reservas</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar

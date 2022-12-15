import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (

               <nav >
        <ul style={{display: 'flex', flexDirection: 'row'}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">About</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/contato">Fale Conosco</Link></li>
          


        </ul>
      </nav>

  );
};

export default Navbar;

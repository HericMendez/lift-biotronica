import { Link } from "react-router-dom";
import Agua from "../../assets/images/agua.jpeg";
import UaiSo from "../../assets/images/paodequeijo.jpg";
import Pulseira from "../../assets/images/ben10.webp";
import { FaShoppingCart } from "react-icons/fa";
import "./styles.css";
const Product = () => {
  return (
    <div>
      <h1>Produtos</h1>
      <div className="products">
        <div className="product-div">
          <img name="agua" className="product-img" src={Agua} alt="" />
          <h4>ÁGUA DESIDRATADA</h4>
          <p>É só acrescentar água!</p>
          <button className="cart-btn">
          <Link
              to="/carrinho/Água&nbsp;Desidratada/19.50"
            >
              <FaShoppingCart size={25} color="#fff" />
            </Link>
          </button>
        </div>
        <div className="product-div">
          <img className="product-img" src={UaiSo} alt="" />
          <h4>PÃO DE QUEIJO</h4>
          <p>Bão dimais da conta, sô!</p>

          <button className="cart-btn">
          <Link
              to="/carrinho/Pão&nbsp;de&nbsp;Queijo/3.99"
            >
              <FaShoppingCart size={25} color="#fff" />
            </Link>
          </button>
        </div>
        <div className="product-div">
          <img className="product-img" src={Pulseira} alt="" />
          <h4>PULSEIRA INTELIGENTE</h4>
          <p>
            Passou em 3 federais e<br /> 15 concursos públicos.
          </p>
          <button className="cart-btn">
            <Link
              to="/carrinho/Pulseira&nbsp;Inteligente/199.99"
            >
              <FaShoppingCart size={25} color="#fff" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

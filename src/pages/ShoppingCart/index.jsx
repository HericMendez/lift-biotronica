import { useParams } from "react-router-dom";

import "./styles.css";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const ShoppingCart = () => {
  let { name, price } = useParams();
  const [totalItem, setTotalItem] = useState(price);
  const [frete, setFrete] = useState(0);


  console.log(name, price);
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <div className="cart-list">
        <div className="cart-item">
          <button className="trash-btn">
            <Link to="/produtos">
              <FaTrash color="#fff" size={20} />
            </Link>
          </button>
          <div>
            <h4>Produto </h4>
            <p>{name}</p>
          </div>
        </div>
        <div>
          <h4>Preço </h4>
          <p>R$ {price}</p>
        </div>
        <div>
          <h4>Qtde </h4>
          <input
            type="number"
            onChange={(e) => setTotalItem(e.target.value * price)}
            min={1}
            defaultValue={1}
            style={{ width: 50, height: 20 }}
          />
        </div>
        <div>
          <div>
            <h4>Total </h4>
            <p>R$ {Number(totalItem).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="resumo">
        <h2>Resumo</h2>
        <div className="subtotal">
          <h4>Subtotal</h4>
          <h4>R${totalItem}</h4>
        </div>
        <div className="frete">
          <h4>Frete</h4>

          <label htmlFor="frete">
            <input
              type="radio"
              name="frete"
              value="normal"
              onClick={() => setFrete(0)}
              checked={true}
            />
            Normal - R$ 0.00
          </label>

          <label htmlFor="frete">
            <input
              type="radio"
              name="frete"
              value="express"
              onClick={() => setFrete(25.00)}
            />
            Expresso - R$ 25.00
          </label>
        </div>
        <div className="total-compra">
          <h4>Total</h4>
          <h4>R$ {(Number(totalItem)+frete).toFixed(2)}</h4>
        </div>
        <Link to={`/compra/${totalItem}/${frete}/${(Number(totalItem)+frete)}`}>
        <button className="confirm-btn">Confirmar Compra</button>
        </Link>

      </div>
    </div>
  );
};

export default ShoppingCart;

import { useParams } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  let { subtotal, frete, total } = useParams();

  console.log(subtotal, frete, total)
  return (
    <>
          <h1>Finalizar Compra</h1>

    <div className="checkout-container">
      <div className="form-container">
        <h2>Meus Dados</h2>
        <label htmlFor="name" >Nome</label>   
        <input type="text" name="name" id="name" />
       
        <label htmlFor="address" >Endereço</label>
        <input type="text" name="address" id="address" />


        <label htmlFor="cep" >CEP</label>
        <input type="text" name="cep" id="cep" />

        <label htmlFor="city" >Cidade</label>
        <input type="text" name="city" id="city" />

        <label htmlFor="state" >Nome</label>
        <input type="text" name="state" id="state" />

        <label htmlFor="email" >Email</label>
        <input type="email" name="email" id="email" />
        
      </div>
      <div className="resumo">
        <h2>Resumo</h2>
        <div className="subtotal">
          <h4>Subtotal</h4>
          <h4>R$ {Number(subtotal).toFixed(2)}</h4>
        </div>
        <div className="subtotal">
          <h4>Frete</h4>
          <h4>R$ {Number(frete).toFixed(2)}</h4>
        </div>

        <div className="total-compra">
          <h4>Total</h4>
          <h4>R$ {Number(total).toFixed(2)}</h4>
        </div>
   
        <Link to='/'>
        <button className="confirma-compra-btn">Ir para Pagamento</button>
        </Link>
        
      </div>
      
    </div>
    
    </>
  );
};

export default Checkout;

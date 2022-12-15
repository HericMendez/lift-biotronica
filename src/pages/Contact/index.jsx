import React from "react";
import "./styles.css";

const Contact = () => {

  return (
    
    <div>
      <h1>Fale Conosco</h1>
      <div className="form-container">
  
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

    </div>
  );
};

export default Contact;

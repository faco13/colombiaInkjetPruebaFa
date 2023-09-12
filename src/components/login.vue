<template>
    <div class="parent">
      <div class="div1">
        <div class="impresora">
          <div class="imp1">
            <img class="log" src="./logo.png" alt="log">
          </div>
          <div class="imp2" >
            <img class="imp" alt="imp" src="./1.png" />
          </div>
        
        
        </div> 
      </div>
    
      <div class="div2">
      <div class="div3">
      <div class="divlog">
        <img class="logotext" src="./2.png" alt="logiyo">
      </div>
      <form action="/" class="form">
        <select name="Tipo de usuario" id="tipo-usuarios" placeholder="Tipo de usuario">
          <option disabled hidden selected>Tipo de usuario</option>
          <option value="Administrador">Administrador</option>
          <option value="Tecnico">Tecnico</option>
        </select>
        <label for="password" class="label"></label>
        <input type="text" id="password" placeholder="Usuario" class="input input-password">
        <label for="new-password" class="label"></label>
        <input type="password" id="new-password" placeholder="Password" class="input input-password">
        <input class="buttom-one" type="submit" value="Ingresar  ">
      </form>
      <a class="letra" href="">Recuperar contraseña</a>
      </div>
    </div> 
  </div>
    </template>
    
    <script>
    export default {
      name: 'HelloWorld',
      props: {
        msg: String
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    template {
      margin: 0;
      
      }
      img{
        size-adjust: 10vh ;
      }
      select{
        border-radius: 6px;
        border: 1px solid #EDEDED;
        background: #FFFEFE;
        box-shadow: -1px -1px 3px 2px rgba(0, 0, 0, 0.10);    
        font-family: Spinnaker;
        margin-bottom: 25px;
      }
      input{
        border-radius: 6px;
        border: 1px solid #EDEDED;
        background: #FFFEFE;
        box-shadow: -1px -1px 3px 2px rgba(0, 0, 0, 0.10);    
        font-family: Spinnaker;
        margin-bottom:25px ;
      }
      .impresora{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;  
        width: 100%;
        height: 98vh;
      }
      .buttom-one{
        border-radius: 6px;
        border: 2px solid rgba(134, 134, 134, 0.23);
        background: #EC008C;
        color: #FFF;
        font-family: Spinnaker;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
      }
      .divlog{
        margin: 0%;
        width: 100%;
        height: 26vh; 

      }
      .logotext{
        margin-top: 17%;
        margin-bottom: 1%;
        transform: scale(0.8,0.8);
      }
      .imp1{
        grid-area: 1 / 1 / 2 / 2; 
        text-align: center; 
        margin-top: 20%;
      }
      .imp2{
        grid-area: 2 / 1 / 3 / 2;
        text-align: center;
      }
    .letra{
      color: #000;
      font-family: Spinnaker;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
    }
    .form {
        display: flex;
        flex-direction: column;
        -ms-flex-align: center;
        margin-top: 5%;
        margin-left: 20%;
        margin-right: 20%;
        padding: 6px;
        text-align:center;
    }
    .parent {
        background-color:aquamarine;
        width: 100%;
        height: 98vh;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(8, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    
      .div1 { grid-area: 1 / 1 / 9 / 4;
      width: 100%; 
      height: 98vh; 
      }
    .div2 {
        position: relative;
        width: 100%;
        height: 98vh;
        grid-area: 1 / 4 / 9 / 7; 
/*       width: 692px; 
         height: 1024px; */
        background: rgba(43, 190, 245);
        outline: 1%;
        z-index:auto;
        }
    .div3 { 
        text-align: center  ;
        position: static;
        grid-area: 2 / 5 / 8 / 6;
        background-color: aliceblue;
        margin-top: 15%;
        margin-left: 26%;
        margin-right: 26%;
        width: 45%; 
        height: 65vh; 
        border-radius: 12px;
    }
    .imagen1{
      text-align: justify;
      
    }
    
    @media (max-width: 640px) {
      .logotext {
        display:static ;
        margin-top: 5%;
      }
      .divlog{
        margin-top: 30%;
      }
      .div3{
        margin: 15%;
        width: 70%;
        height: 70vh;
      }
      .div2{
        width: 100%;
        height: 100vh;
        grid-area: 1 / 1 / 9 / 7; 
      }
    }


    </style>
    
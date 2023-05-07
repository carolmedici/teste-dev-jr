import React from "react";
import Cards from "../Produtos/Cards"
import style from "./ProdutosRelacionados.module.scss"
import produtos from "../Produtos/produtos.json";
import { useState } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


    
  

 

const ProdutosRelacionados = () => {
    
  return (
    <section className={style.produtosStyle}>
      
     <hr className={style.produtosStyle__linha}/> <h2 className={style.produtosStyle__titulo}>Produtos relacionados</h2> 
     <hr className={style.produtosStyle__linha2}/>
     
    
    
      <Cards items={produtos} style={style} />
       


     



    </section>
  );
};

export default ProdutosRelacionados;

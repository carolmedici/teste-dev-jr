import React from "react";

import Cards from "./Cards";
import style from "./Produtos.module.scss";
import produtos from "./produtos.json";
import { useState } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProdutosTags from "./produtosTag";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

const Produtos = () => {
  const [items, setItems] = useState(produtos);
  const produtosTags = [...new Set(produtos.map((valor) => valor.produtosTag))];
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const ProdutosFilter = (produtosTag) => {
    const newProdutos = produtos.filter((produto) => {
      return produto.produtosTag === produtosTag;
    });

    setItems(newProdutos);
  };

  
  return (
    <section className={style.produtosStyle}>
      
     <hr className={style.produtosStyle__linha}/> <h2 className={style.produtosStyle__titulo}>Produtos relacionados</h2> 
     <hr className={style.produtosStyle__linha2}/>
    <ProdutosTags produtosTags={produtosTags} ProdutosFilter={ProdutosFilter}/>


     <Slider className={style.produtosStyle} {...settings} >
     {produtos.map((produto) => (
  <div key={produto.tag}>
      <Cards items={items} style={style} />
        </div>
      ))}


      </Slider>
     



    </section>
  );
};

export default Produtos;


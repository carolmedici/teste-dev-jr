import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "./Marcas.module.scss";
import produtos from "../Produtos/produtos.json";
import vtex from "./imagem/vtex.svg";
import vtex2 from "./imagem/vtex.svg";
import vtex3 from "./imagem/vtex.svg";
import vtex4 from "./imagem/vtex.svg";
import vtex5 from "./imagem/vtex.svg";
import vtex6 from "./imagem/vtex.svg";
import vtex7 from "./imagem/vtex.svg";
import vtex8 from "./imagem/vtex.svg";
import next from "./imagem/next.svg";

const marcas = [
  { imagem: vtex, tag: "vtex" },
  { imagem: vtex2, tag: "vtex" },
  { imagem: vtex3, tag: "vtex" },
  { imagem: vtex4, tag: "vtex" },
  { imagem: vtex5, tag: "vtex" },
  { imagem: vtex6, tag: "vtex" },
  { imagem: vtex7, tag: "vtex" },
  { imagem: vtex8, tag: "vtex" },
];

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick} style={{ position: "absolute", top: "40%", right: "60px", transform: "translateY(-100%)", zIndex: "1" }}>
      <img src={next} alt="Next" />
    </button>
  );
};
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow className={style.nextArrow} />,
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

const Marcas = () => {
  const [items, setItems] = useState(produtos);
  const [tagSelecionada, setTagSelecionada] = useState(null);

  const filtrarProdutos = (tag) => {
    setTagSelecionada(tag);
    if (tag === null) {
      setItems(produtos);
    } else {
      const novosProdutos = produtos.filter((produto) => produto.tag === tag);
      setItems(novosProdutos);
    }
  };

  return (
    <>
      <h1 className={style.titulo}>Navegue por Marcas</h1>
      <Slider {...settings} >
        {marcas.map((marca) => (
          <div key={marca.tag} onClick={() => filtrarProdutos(marca.tag)}>
            <img className={style.img} src={marca.imagem} alt={`Imagem de ${marca.tag}`} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Marcas;
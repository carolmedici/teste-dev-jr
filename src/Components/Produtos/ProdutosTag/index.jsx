import React from "react";
import style from "./ProdutosTag.module.scss"

const ProdutosTags = ({ produtosTags, ProdutosFilter }) => {
  return (
    <div className={style.tags}>

      {produtosTags.map((produtosTag, index) => (
        <>
        <button key={index} onClick={() => ProdutosFilter(produtosTag)}>
          {produtosTag}
         
        </button>
         
         </>
      ))}
      <button onClick={() => setItems(photos)}> VER TODOS</button>
    </div>
  );
};

export default ProdutosTags;
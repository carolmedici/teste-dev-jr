import React, { useState } from "react";
import Modal from 'react-modal'

const Cards = ({ items, style }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickCard = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <>
      <ul className={style.produtosStyle__cards}>
        {items.map((item) => {
          return (
            <div onClick={() => handleClickCard(item)}>
              <li key={item.productName} className={style.produtosStyle__card}>
                <img className={style.produtosStyle__imagem} src={item.photo} alt={item.productName} />
                <p className={style.produtosStyle__description} >{item.descriptionShort}</p>
                <p className={style.produtosStyle__preco} >R$ {item.price}</p>
                <p className={style.produtosStyle__promocao} >R$ {item.price*0.9}</p>
                <p className={style.produtosStyle__parcelamento} >ou 2x de R$ {item.price/2} sem juros</p>
                <p className={style.produtosStyle__frete} >Frete grátis</p>
                <button className={style.produtosStyle__button} >COMPRAR</button>
              </li>
            </div>
          );
        })}
      </ul>
      {selectedItem && modalVisible && (
        <Modal isOpen={modalVisible} className={style.produtosStyle__modal}>
         <button className={style.produtosStyle__modalFechar} onClick={() => setModalVisible(false)}>X</button>
         
          <div className={style.produtosStyle__modalProduto}>
            <img className={style.produtosStyle__modalImagem} src={selectedItem.photo} alt={selectedItem.productName} />
            <div className={style.produtosStyle__modalInfo} >
                <h2 className={style.produtosStyle__modalTitulo}>{selectedItem.productName}</h2>
                <p className={style.produtosStyle__modalPreco}>R$ {selectedItem.price}</p>
                <p className={style.produtosStyle__modalDescricao}>{selectedItem.descriptionShort}</p>
                <a href="#" className={style.produtosStyle__modalDetalhes}>Veja mais detalhes do produto &gt; </a>
          </div>
          </div>
         
        </Modal>
      )}
    </>
  );
};

export default Cards;


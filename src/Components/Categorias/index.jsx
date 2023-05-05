import { useState } from "react";
import produtos from "../Produtos/produtos.json";
import tecnologia from "./imagens/monitor.svg";
import supermercado from "./imagens/mercado.svg";
import bebidas from "./imagens/whiskey.svg";
import ferramentas from "./imagens/ferramenta.svg";
import saude from "./imagens/cuidados-de-saude.svg";
import esportes from "./imagens/esportes.svg";
import moda from "./imagens/moda.svg";
import style from "./Categoria.module.scss"

const categorias = [
  { 
    nome: "Tecnologia", 
    imagem: tecnologia, 
    tag: "tecnologia" 
},
  { 
    nome: "Supermercado", 
    imagem: supermercado, 
    tag: "supermercado" 
},
  { 
    nome: "Bebidas", 
     imagem: bebidas, 
     tag: "bebidas" 
},
  { 
    nome: "Ferramentas", 
    imagem: ferramentas, 
    tag: "ferramentas" 
},
  { 
    nome: "Saúde", 
    imagem: saude, 
    tag: "saude" 
},
  { nome: "Esportes", 
  imagem: esportes, 
  tag: "esportes" 
},
  { nome: "Moda", 
  imagem: moda, 
  tag: "moda" 
},
];

const Categorias = () => {
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
      <section className={style.categorias}>
        <div className={style.categorias__Imagens}>
          {categorias.map((categoria) => (
            <a
              key={categoria.tag}
              onClick={() => filtrarProdutos(categoria.tag)}
              className={
                tagSelecionada === categoria.tag
                  ? `${style.categoriasAtiva} svg-ativa`
                  : style.categoriasInativa
              }
            >
              {categoria.imagem.endsWith(".svg") ? (
                <img src={categoria.imagem} alt={`Imagem de ${categoria.nome}`} />
              ) : (
                <img src={categoria.imagem} alt={`Imagem de ${categoria.nome}`} />
              )}
              <div className={style.categorias__Nome}>{categoria.nome}</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Categorias;
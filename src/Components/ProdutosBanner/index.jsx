import style from "./ProdutosBanner.module.scss"

const ProdutosBanner = () =>{
    return(
        <div className={style.imgProdutos}>
        <div className={style.imgProdutos__produtos}>
            
        <h1 className={style.imgProdutos__h1}>Produtos</h1>
        <h2 className={style.imgProdutos__h2}>Lorem ipsum dolor sit amet, consectetur</h2>

        <button className={style.imgProdutos__button}>Confira</button>

        </div>
          <div className={style.imgProdutos__produtos}>
            
          <h1 className={style.imgProdutos__h1}>Produtos</h1>
          <h2 className={style.imgProdutos__h2}>Lorem ipsum dolor sit amet, consectetur</h2>
  
          <button className={style.imgProdutos__button}>Confira</button>
  
          </div>
          </div>
    )
}

export default ProdutosBanner
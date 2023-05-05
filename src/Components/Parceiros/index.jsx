import style from "./Parceiros.module.scss"

const Parceiros = () =>{
    return(
        <div className={style.imgParceiros}>
        <div className={style.imgParceiros__parceiros}>
            
        <h1 className={style.imgParceiros__h1}>Parceiros</h1>
        <h2 className={style.imgParceiros__h2}>Lorem ipsum dolor sit amet, consectetur</h2>

        <button className={style.imgParceiros__button}>Confira</button>

        </div>
          <div className={style.imgParceiros__parceiros}>
            
          <h1 className={style.imgParceiros__h1}>Parceiros</h1>
          <h2 className={style.imgParceiros__h2}>Lorem ipsum dolor sit amet, consectetur</h2>
  
          <button className={style.imgParceiros__button}>Confira</button>
  
          </div>
          </div>
    )
}

export default Parceiros
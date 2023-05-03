import truck from "./Truck.svg"
import shield from "./ShieldCheck.svg"
import creditCard from "./CreditCard.svg"

import style from "./TopBar.module.scss"

const TopBar = () =>{

    return (
       <div className={style.topBar}> 
       <p>
            <img className={style.topBar__img} src={shield} alt="Shield" /> 
            <span className={style.topBar__text}>Compra </span>
            <span className={style.topBar__highlight}>100% segura</span>
        </p>
        <p>
            <img className={style.topBar__img} src={truck} alt="Truck" /> 
            <span className={style.topBar__highlight}>Frete Grátis </span>
            <span className={style.topBar__text}>acima de R$ 200</span>
        </p> 
        <p>
            <img className={style.topBar__img} src={creditCard} alt="Credit Card" /> 
            <span className={style.topBar__highlight}>Parcele </span>
            <span className={style.topBar__text}>suas compras</span>
        </p>
        </div>
    )
}

export default TopBar
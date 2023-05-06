/*import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';*/
import style from "./Menu.module.scss"
import coroa from "./CrownSimple.svg"

const Menu = () =>{

    return(
        <>
        <ul className={style.Menu}>
            <li className={style.Menu__li}>TODAS AS CATEGORIAS</li>
            <li className={style.Menu__li}>SUPERMERCADO</li>
            <li className={style.Menu__li}>LIVROS</li>
            <li className={style.Menu__li}>MODA</li>
            <li className={style.Menu__li}>LANÇAMENTOS</li>
            <li className={style.Menu__oferta}>OFERTAS DO DIA</li>
            <li className={style.Menu__li}><img className={style.Menu__img} src={coroa} alt="Coroa respresentando Assinantes" /> ASSINATURA</li>
        </ul>
        
        </>

    )
} 

export default Menu
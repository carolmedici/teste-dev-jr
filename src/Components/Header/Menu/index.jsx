/*import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';*/
import style from "./Menu.module.scss"
import coroa from "./CrownSimple.svg"

const Menu = () =>{

    return(
        <>
        <ul className={style.Menu}>
            <li>TODAS AS CATEGORIAS</li>
            <li>SUPERMERCADO</li>
            <li>LIVROS</li>
            <li>MODA</li>
            <li>LANÇAMENTOS</li>
            <li className={style.Menu__oferta}>OFERTAS DO DIA</li>
            <li><img className={style.Menu__img} src={coroa} alt="Coroa respresentando Assinantes" /> ASSINATURA</li>
        </ul>
        
        </>

    )
} 

export default Menu
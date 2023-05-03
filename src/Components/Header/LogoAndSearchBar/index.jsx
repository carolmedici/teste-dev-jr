import logo from "./logo.svg"
import style from "./LogoAndSearchBar.module.scss"

const LogoAndSearchBar = () =>{

    return( 
        <div className={style.LogoAndSearchBar}>
            <img className={style.LogoAndSearchBar__img} src={logo} alt="Logo" />
            <input className={style.LogoAndSearchBar__input} placeholder=" O que você esta buscando?" type="search" name="search" id="search" />
        
        </div>
    )
}

export default LogoAndSearchBar
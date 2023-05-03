import LogoAndSearchBar from "./LogoAndSearchBar"
import TopBar from "./TopBar"
import UserMenu from "./UserMenu"
import style from "./Header.module.scss"
import Menu from "./Menu"

const Header = () =>{

    return (
        <>
        <TopBar />
        <div className={style.line}></div>
        <span className={style.middleMenu}>
            <LogoAndSearchBar/>
            <UserMenu />          
        </span>
        <Menu />

        </>
    )
}

export default Header
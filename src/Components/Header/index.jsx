import LogoAndSearchBar from "./LogoAndSearchBar"
import TopBar from "./TopBar"
import UserMenu from "./UserMenu"
import style from "./Header.module.scss"

const Header = () =>{

    return (
        <>
        <TopBar />
        <span className={style.middleMenu}>
            < LogoAndSearchBar />
            <UserMenu />

        </span>

        </>
    )
}

export default Header
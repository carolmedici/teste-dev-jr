import orders from "./Orders.svg"
import heart from "./Heart.svg"
import cart from "./ShoppingCart.svg"
import user from "./UserCircle.svg"
import style from "./UserMenu.module.scss"

const UserMenu = () =>{

    return(
        <div className={style.UserMenu}>
        <img className={style.UserMenu__icone} src={orders} alt="Orders Box" />
        <img className={style.UserMenu__icone} src={heart} alt="Heart" />
        <img className={style.UserMenu__icone} src={user} alt="User" />
        <img className={style.UserMenu__icone} src={cart} alt="Shopping Cart" />
        </div>
    )
}

export default UserMenu
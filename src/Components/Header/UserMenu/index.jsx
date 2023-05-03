import orders from "./Orders.svg"
import heart from "./Heart.svg"
import cart from "./ShoppingCart.svg"
import user from "./UserCircle.svg"
import style from "./UserMenu.module.scss"

const UserMenu = () =>{

    return(
        <div className={style.UserMenu}>
        <img src={orders} alt="Orders Box" />
        <img src={heart} alt="Heart" />
        <img src={user} alt="User" />
        <img src={cart} alt="Shopping Cart" />
        </div>
    )
}

export default UserMenu
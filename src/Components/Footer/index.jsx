import style from "./Footer.module.scss"
import Cadastro from "./Cadastro"
import CopyRight from "./CopyRight"
import Links from "./Links"

const Footer = () =>{

    return(
        <div>
        <div className={style.footer}>
            
       <Links />
       <Cadastro />
      
        </div>
            <CopyRight />
         </div>
    )
}

export default Footer
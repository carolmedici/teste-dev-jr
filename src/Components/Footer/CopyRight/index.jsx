import vtex from "./vtex.svg"
import econverse from "./econverse.svg"
import style from "./CopyRight.module.scss"

const CopyRight= () =>{

    return(
        <div className={style.copyRight}>
        <p >Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
<div className={style.copyRight__logos}>
        <img src={econverse} alt="Logo da EConverse" />
        <img src={vtex} alt="Logo da Vtex" />
</div>
</div>
        )
}


export default CopyRight
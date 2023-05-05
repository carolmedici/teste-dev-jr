import style from "./Cadastro.module.scss"

const Cadastro = () =>{
    return(
        <div className={style.Cadastro}>
            <h4 className={style.Cadastro__titulo}>CADASTRE-SE E RECEBA NOSSAS <strong>NOVIDADES E PROMOÇÕES</strong></h4>
            <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
            
            <input className={style.Cadastro__input} type="email" placeholder="SEU E-MAIL" required/>
            <input className={style.Cadastro__button} type="button" value="OK" />

       
        </div>
    )
}

export default Cadastro
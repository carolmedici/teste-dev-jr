import facebook from "./imagens/facebook.svg"
import alelo from "./imagens/alelo.svg"
import amex from "./imagens/amex.svg"
import dinners from "./imagens/dinners.svg"
import elo from "./imagens/elo.svg"
import ifood from "./imagens/ifood.svg"
import instagram from "./imagens/instagram.svg"
import mastercard from "./imagens/mastercard.svg"
import pix from "./imagens/pix.svg"
import sodexo from "./imagens/sodexo.svg"
import ticket from "./imagens/ticket.svg"
import visa from "./imagens/visa.svg"
import youtube from "./imagens/youtube.svg"
import style from "./Links.module.scss"

const Links = () =>{
    return(
        <div className={style.Links}>
            <div className={style.Links__coluna}>
                    <h3 className={style.Links__titulo1}>Sobre Nós</h3>
                    <ul>
                        <li className={style.Links__link}>CONHEÇA</li>
                        <li className={style.Links__link}>COMO COMPRAR</li>
                        <li className={style.Links__link}>INDICAÇÃO E DESCONTO</li>
                    </ul>
                    <div id="logo" className={style.Links__logo}>
                        <img src={facebook} alt="Logo do facebook" />
                        <img src={instagram} alt="Logo do instagram" />
                        <img src={youtube} alt="Logo do youtube" />
                    </div>
                </div>
                <div className={style.Links__coluna2}>
                    <h4 className={style.Links__titulo2}>INFORMAÇÕES ÚTEIS</h4>
                    <ul>
                        <li className={style.Links__link2}>FALE CONOSCO</li>
                        <li className={style.Links__link2}>DÚVIDAS</li>
                        <li className={style.Links__link2}>PRAZOS DE ENTREGA</li>
                        <li className={style.Links__link2}>FORMAS DE PAGAMENTO</li>
                        <li className={style.Links__link2}>POLÍTICA DE PRIVACIDADE</li>
                        <li className={style.Links__link2}>TROCAS E DEVOLUÇÕES</li>
                    </ul>
                </div>
                <div className={style.Links__coluna3}>
                    <h4 className={style.Links__titulo3}>FORMAS DE PAGAMENTO</h4>
                        <div className={style.Links__FormasPagamento}>
                            <img src={visa} alt="Logo do visa" />
                            <img src={elo} alt="Logo da elo" />
                            <img src={alelo} alt="Logo do alelo" />
                            <img src={dinners} alt="Logo do dinners club" />
                            <img src={ifood} alt="Logo do ifood" />
                            <img src={mastercard} alt="Logo do mastercard" />
                            <img src={pix} alt="Logo do pix" />
                            <img src={amex} alt="Logo do amex" />
                            <img src={ticket} alt="Logo do ticket" />
                            <img src={sodexo} alt="Logo do sodexo" />  
                        </div>
                    </div>
        </div>

    )
}

export default Links
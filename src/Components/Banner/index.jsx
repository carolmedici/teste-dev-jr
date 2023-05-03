import style from "./Banner.module.scss"
import bannerImg from "./banner.svg"

const Banner = () =>{
    return(
        <div className={style.Banner}>
            
        <h1 className={style.Banner__h1}>Venha conhecer nossas promoções</h1>
        <h2 className={style.Banner__h2}>50% Off nos produtos</h2>

        <button className={style.Banner__button}>Ver produto</button>

        </div>

    )
}


export default Banner


import Banner from "../Banner"
import Categorias from "../Categorias"
import Footer from "../Footer"
import Header from "../Header"
import Marcas from "../Marcas"
import Parceiros from "../Parceiros"
import ProdutosBanner from "../ProdutosBanner"

const HomePage = () =>{

    return(
        <>
        <Header />
        <Banner />
        <Categorias />
        <Parceiros />
        <ProdutosBanner/>
        <Marcas />
        <Footer />
        </>
    )
}

export default HomePage
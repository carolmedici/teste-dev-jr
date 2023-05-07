
import Banner from "../Banner"
import Categorias from "../Categorias"
import Footer from "../Footer"
import Header from "../Header"
import Marcas from "../Marcas"
import Parceiros from "../Parceiros"
import Produtos from "../Produtos"
import ProdutosBanner from "../ProdutosBanner"
import ProdutosRelacionados from "../ProdutosRelacionados"

const HomePage = () =>{

    return(
        <>
        <Header />
        <Banner />
        <Categorias />
        <Produtos />
        <Parceiros />
        <ProdutosRelacionados/>
        <ProdutosBanner/>
        <Marcas />
        <ProdutosRelacionados/>
        <Footer />
        </>
    )
}

export default HomePage
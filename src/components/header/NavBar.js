import Brand from "./Brand";
import "../../styles/NavBar.css"
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./CartContext";

const NavBar = () => {

    return (
        <ContextCart>
            <header>
                <div className="containerBrand">
                    <Brand />
                </div>

                <div className="containerItemList">
                    <ItemListContainer 
                        itemUno = "Procesadores"
                        itemDos = "Motherboards"
                        itemTres = "Fuentes"
                        itemCuatro = "Placas de video"
                    />
                </div>

                <div className="containerCart">
                    <CartWidget />
                </div>

                <ContainerCart />
            </header>
        </ContextCart>
    )
}

export default NavBar;
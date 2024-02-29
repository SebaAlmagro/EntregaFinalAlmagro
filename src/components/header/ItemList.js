import "../../styles/ItemList.css"
import deleteWhite from "../../img/deleteWhite.svg"
import { useContext } from "react"
import { listCartContext } from "../components items/ProviderContextListCart"


const ItemList = ( {id, title, image, price, quantity } ) => {

    const { removeFromCart } = useContext(listCartContext)
    
    return (
        <div className="ItemList">

            <div className="img">
                <img src={image}></img>
            </div>

            <div className="description-cantidad">
                <span className="title">{title}</span>
                <span className="quantity">{`cantidad: ${quantity}`}</span>
            </div>

            <div className="price">
                <span className="subtotal">Subtotal</span>
                <span className="price">${price * quantity}</span>
            </div>

            <button className="delete" onClick={ () => removeFromCart(id) }>
                <img src={deleteWhite}></img>
            </button>
        </div>
    )
}

export default ItemList
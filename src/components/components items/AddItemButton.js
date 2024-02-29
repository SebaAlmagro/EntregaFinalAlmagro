const AddItemButton = (props) => {
    return(
        <div className="AddItemButton">
            <span>Quiero:</span>
            <div>
                <button id="quitar">-</button>
                <span className="cantTxt"> {props.cant} unidades</span>
                <button id="aumentar">+</button>
            </div>
        </div>
    )   
}

export default AddItemButton; 
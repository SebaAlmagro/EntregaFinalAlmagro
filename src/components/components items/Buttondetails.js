const ButtonDetails = (props) => {
    return(
        <button 
            id="detalles" 
            style={{ width: "180%"}}
        >{props.txt}</button>
    )
}

export default ButtonDetails;
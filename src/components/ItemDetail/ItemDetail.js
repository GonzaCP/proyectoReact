import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, price, description, place, time }) => {
    return (
        <div>            
            <h4>{name}</h4>
            <p>{description}</p> 
            <p>{place}</p>
            <p>{time}</p>  
            <p>${price} c/entrada</p>       
            <ItemCount />
        </div>
    )
}

export default ItemDetail
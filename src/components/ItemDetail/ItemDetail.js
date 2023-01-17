import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, price, description, place, time }) => {
    return (
        <div>            
            <h3>{name}</h3>
            <p>{description}</p> 
            <p>{place}</p>
            <p>{time}</p>  
            <p>${price} c/u</p>       
            <ItemCount />
        </div>
    )
}

export default ItemDetail
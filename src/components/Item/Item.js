import { Link } from "react-router-dom"


const Item = ({ id, name, price, place, time }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{place}</p>
            <p>{time}</p>
            <p>${price} c/u</p>
            <Link to={`/item/${id}`}>Comprar entradas!</Link>
        </div>
    )
}

export default Item
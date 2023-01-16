import { Link } from "react-router-dom"


const Item = ({ id, name, price }) => {
    return (
        <div>
            <h4>{name}</h4>
            <h3>{price}</h3>
            <Link to={`/item/${id}`}>Mostrar más</Link>
        </div>
    )
}

export default Item
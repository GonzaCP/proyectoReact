import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, price, category, description }) => {
    return (
        <div>
            <h3>ID: {id}</h3>
            <h4>Nombre de la banda{name}</h4>
            <p>Precio: $ {price}</p>
            <p>Descripcion: {description}</p>
            <p>Categoria:{category}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail
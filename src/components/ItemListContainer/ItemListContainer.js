import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => { 
       
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading()

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])
  
    if(loading) {
        return <h1>Cargando..</h1>
    }

    return (
        <div>                   
           <h1>ENTRADAS DISPONIBLES PARA LA VENTA</h1>
           <ItemList products={products}/>          
        </div>
    )
}

export default ItemListContainer
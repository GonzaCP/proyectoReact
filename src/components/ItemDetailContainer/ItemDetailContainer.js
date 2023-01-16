import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [ product, setProduct ] = useState()
    const [ loading, setLoading ] = useState(true)
    
    
    const { productId } = useParams()   
 
    
    useEffect(() => {
        document.title = "Detalle del producto"
    }, [])

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)                
            }).finally(() => {
                setLoading(false)
            })
    }, [productId])

    if (loading) {
        return <h1>Aguarde un momento...</h1>
    }

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
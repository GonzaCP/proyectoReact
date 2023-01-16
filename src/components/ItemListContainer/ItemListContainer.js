import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
import { getProducts } from "../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {
       
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getProducts().then(productsFromApi =>{
            setProducts(productsFromApi)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })
    }, [])
    if(loading) {
        return <h1>Cargando..</h1>
    }
    // const { categoryId } = useParams()


    // useEffect(() => {
    //     const asyncFunction = categoryId ? getProductsByCategory : getProducts
    //     asyncFunction(categoryId)
    //         .then(products => {
    //             setProducts(products)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [categoryId])
  


    return (
        <div>                   
           <h1>PRODUCTOS ItemListContainer</h1>
           <ItemList products={products}/>
          
        </div>
    )
}

export default ItemListContainer
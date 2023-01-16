const products = [
    { id: 1, name: "Red Hot Chili Peppers", price: 500, category: "redhot", description: "El mejor funky-rock de la historia" },
    { id: 2, name: "Greta Van Fleet", price: 300, category: "greta", description: "Los nuevos Led Zeppelin" },
    { id: 3, name: "Pink Floyd", price: 700, category: "pink", description: "los históricos" }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)           
        }, 500)
    })    
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))           
        }, 1500)
    })    
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
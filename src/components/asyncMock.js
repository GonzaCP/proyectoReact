const products = [
    { id: 1, name: "Red Hot Chili Peppers", price: 500, category: "musica", description: "El mejor funky-rock de la historia", place: "Estadio Ruca Che", time: "21 hs" },
    { id: 2, name: "Greta Van Fleet", price: 300, category: "musica", description: "Los nuevos Led Zeppelin", place: "Casino Magic", time: "21.30 hs"  },
    { id: 3, name: "Pink Floyd", price: 700, category: "cine", description: "los históricos", place: "Cemento", time: "22 hs" }
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
            resolve(products.find(prod => prod.id == id))
        }, 500)
    })
}
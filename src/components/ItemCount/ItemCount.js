import { useState } from 'react'

const ItemCount = ({ onAdd }) => {
    
    //DESESTRUCTURACIÓN DEL ARRAY
    const [count, setCount] = useState(1)

    // FORMA CORRECTA DE REALIZAR UN CONTADOR
    const menos = () => {
        if (count === 1) {
            setCount(1)
        } else {
            setCount(previo => previo - 1)
        }        
    } 

    const mas = () => {
        setCount(count + 1)        
    }

    const reset = () => {
        setCount(1)
    }
    
    return (   
        <div>
            <h2>{count}</h2>
            <button onClick={menos}>-</button>
            <button onClick={mas}>+</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
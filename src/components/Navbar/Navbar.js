import logoPrincipal from '../img/cultura_musical.png';
import './Navbar.css'
import Button from '../Button/Button';

const Navbar = () => {
    return (     
        <header>
            <nav className="navColor">            
                <img src={logoPrincipal} alt="logo principal del sitio" />                 
                <Button label="Recitales" color="blue" handleClick={() => alert("Hiciste click al 1er boton ")} bootstrap=" btn btn-primary btn-lg " />
                <Button label="Teatro" color="red" handleClick={() => alert("Hiciste click al 2do boton ")} bootstrap=" btn btn-primary btn-lg " />
                <Button label="Cine" color="yellow" bootstrap=" btn btn-primary btn-lg " />                    
                
                {/* <button>Recitales</button>
                <button>Teatro</button>
                <button>Cine</button>  */}       
            </nav> 
        </header>
    )
}

export default Navbar
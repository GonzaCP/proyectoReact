import logoPrincipal from '../img/cultura_musical.png';
import './Navbar.css'
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (     
        <header>
            <nav className="navColor">               
                    <img src={logoPrincipal} alt="logo principal del sitio" />            
                    <Button label="Recitales" backgroundColor="blue" bootstrap=" btn btn-primary btn-lg " />
                    <Button label="Teatro" backgroundColor="red" bootstrap=" btn btn-primary btn-lg " />
                    <Button label="Cine" backgroundColor="green" bootstrap=" btn btn-primary btn-lg " />
                    <CartWidget />
            </nav> 
        </header>
    )
}

export default Navbar
import logoPrincipal from '../img/cultura_musical.png';
import './Navbar.css'
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (     
        <header>
            <nav className="navColor">
                <Link to="/" >
                    <div className='navLogo' >
                        <img src={logoPrincipal} alt="logo principal del sitio" />                            
                    </div>
                </Link>                
                <div className='navButton'>
                    <Button label="Recitales" backgroundColor="blue" bootstrap=" btn btn-primary btn-lg m-3" />
                    <Button label="Teatro" backgroundColor="red" bootstrap=" btn btn-primary btn-lg m-3 " />
                    <Button label="Cine" backgroundColor="green" bootstrap=" btn btn-primary btn-lg m-3 " />
                </div>
                <div className='navCart'>
                <CartWidget />  
                </div>
                <div>
                    <Link to="/category/redhot">RedHot</Link>
                    <Link to="/category/greta">Greta Van Fleet</Link>
                    <Link to="/category/pink">Pink Floyd</Link>
                </div>
            </nav> 
        </header>
    )
}

export default Navbar
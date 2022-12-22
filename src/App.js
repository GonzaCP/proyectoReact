import './App.css';
import Navbar from './components/Navbar/Navbar';
//import Button from './components/Button/Button';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">    
        <Navbar /> {/* se importa el componente Navbar.js */}        
        {/* <Button label="Recitales" color="blue" handleClick={() => alert("Hiciste click al 1er boton perra")}/>
        <Button label="Teatro" color="red" handleClick={() => alert("Hiciste click al 2do boton perra")}/>
        <Button label="Cine" color="yellow" /> */}
        <ItemListContainer />
    </div>
  );
}

export default App;

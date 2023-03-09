import logo from './logo.svg';
import './App.css';
import Pagina from "./Components/pagina";
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
       <Container fixed>
            <Pagina  
               titulo="Practica Reac" 
            />
       </Container>
    </div>
  );
}

export default App;

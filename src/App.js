
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;

/* 
- Dentro de components tem tudo o que foi feito. 
1> Comecando pelo NAVBAR. (NavBar é o menu de cima horizontal);
2> Depois temos o SIDEBAR (Que é o menu lateral quando a tela 
fica pequena e tem que clicar no botao FabBars (tres risquinhos))

*/
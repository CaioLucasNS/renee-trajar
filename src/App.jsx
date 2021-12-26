import { NavbarComponent } from "./components/NavbarComponent/NavbarComponent.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      
      <h1>Hello world</h1>
      <button>Button here</button>

      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>

      

    </div>
  );
}

export default App;

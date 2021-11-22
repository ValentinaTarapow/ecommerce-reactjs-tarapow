import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Footer} from './components/Footer/Footer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
    
      <main>
        <ItemListContainer />
        <ItemDetailContainer />
      </main>

      <Footer />
    </div>
  );
}

export default App;

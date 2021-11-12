import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer greeting="Perfume is the art that makes the memory speak"/>
      </main>
    </div>
  );
}

export default App;

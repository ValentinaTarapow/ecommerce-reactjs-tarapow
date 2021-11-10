// import './App.css';
import './style.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

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

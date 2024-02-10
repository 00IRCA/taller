import logo from './logo.svg';
import './App.css';
import ButtonsSection from './Componentes/Buttons/ButtonsSection';
import Page from './Componentes/Nested/Page';

function App() {

  const itemsList = ["pera", "manzana", "sandia", "melocoton"]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aprende React</h1>

        <ButtonsSection title={"Sección Botones"}/>

        <Page data={itemsList} />
      </header>
    </div>
  );
}

export default App;

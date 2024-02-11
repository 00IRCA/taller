import logo from './logo.svg';
import './App.css';
import "./Componentes/Buttons/Button.css"
import UseStateSection from './Hooks/useState/useStateSection';
import UseReducerSection from './Hooks/useReducer/useReducerSection';
import Page from './Componentes/Nested/Page'
import { createContext } from 'react';
import UseEffectContainer from './Hooks/useEffect/useEffectContainer';

export const DataContext = createContext(null)

function App() {

  const itemsList = ["pera", "manzana", "sandia", "melocoton"]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aprende React</h1>
      </header>
      <div className='content'>
        <h2>Hooks</h2>

        {/*useState*/}
        <UseStateSection />

        {/*useReducer*/}
        <UseReducerSection />

        {/*createContext - useContext*/}
        <DataContext.Provider value={itemsList}>
          <Page />
        </DataContext.Provider>

        {/*useEffect*/}
        <UseEffectContainer />
      </div>
    </div>
  );
}

export default App;

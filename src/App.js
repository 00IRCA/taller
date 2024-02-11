import logo from './logo.svg';
import './App.css';
import "./Componentes/Buttons/Button.css"
import UseStateSection from './Hooks/useState/useStateSection';
import UseReducerSection from './Hooks/useReducer/useReducerSection';
import Page from './Componentes/Nested/Page'
import { createContext, useState } from 'react';
import UseEffectContainer from './Hooks/useEffect/useEffectContainer';

export const DataContext = createContext(null)

function App() {
  const [section, setSection] = useState("state")
  const itemsList = ["pera", "manzana", "sandia", "melocoton"]

  function renderSection() {
    switch (section) {
      case "state": return <UseStateSection />
      case "reducer": return <UseReducerSection />
      case "effect": return <UseEffectContainer />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aprende React</h1>
      </header>
      <div className='content'>
        <h2>Router</h2>
        <ul style={{display: "flex", gap: "20px"}}>
          <li><a onClick={() => {setSection("state")}}>Use State</a></li>
          <li><a onClick={() => {setSection("reducer")}}>Use Reducer</a></li>
          <li><a onClick={() => {setSection("effect")}}>Use Effect</a></li>
        </ul>

        {renderSection()}
      </div>
    </div>
  );
}

export default App;

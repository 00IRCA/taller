import "./Componentes/Buttons/Button.css"
import UseStateSection from './Hooks/useState/useStateSection';
import UseReducerSection from './Hooks/useReducer/useReducerSection';
import Page from './Componentes/Nested/Page'
import { createContext, useState } from 'react';
import UseEffectContainer from './Hooks/useEffect/useEffectContainer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './RouterPages/root';
import PersistPage from "./RouterPages/PersistPage";

export const PersistContext = createContext(null) 

function App() {
  const [persistValue, setPersistValue] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "state",
          element: <UseStateSection />
        },
        {
          path: "reducer",
          element: <UseReducerSection />
        },
        {
          path: "effect",
          element: <UseEffectContainer />
        },
        {
          path: "persist",
          element: <PersistPage />
        }
      ]
    },
  ]);


  return (
    <PersistContext.Provider value={
      {
        persistValue,
        setPersistValue,
        }
      }
    >
      <RouterProvider router={router} />
    </PersistContext.Provider>
  )
}

export default App;

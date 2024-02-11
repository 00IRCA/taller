import { useReducer } from "react"

export default function UseReducerSection() {
    function reducer(state, action) {
        //Por convención usar switch para diferenciar tipo de acción
        switch (action.type) {
            case "increase": {
                return state + 1;
            }
            case "reduce": {
                return state - 1;
            }
            case "reset": {
                return 0;
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <h3>useReducer</h3>
            <button onClick={() => {dispatch({type: "increase"})}}>Aumentar</button>
            <button onClick={() => {dispatch({type: "reduce"})}}>Reducir</button>
            <button onClick={() => {dispatch({type: "reset"})}}>Iniciar</button>
            <span>{state}</span>
        </div>
    )
}
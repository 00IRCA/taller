import { PersistContext } from "../App"
import { useContext } from "react"

export default function PersistPage() {

    const {persistValue, setPersistValue} = useContext(PersistContext)
    return (
        <div>
            <span>Contador: {persistValue}</span>
            <button onClick={() => {setPersistValue(persistValue + 1)}}>Sumar</button>
        </div>
    )
}
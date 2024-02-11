import { useContext } from "react"
import { DataContext } from "../../App"

export default function List() {

    const data = useContext(DataContext)
    
    function listData() {
        return (
            <ul>
                {data.map((item) => <li>{item}</li>)}
            </ul>
        )
    }

    return (
        <div>
            <h3>Lista</h3>
            {listData()}
        </div>
    )
}
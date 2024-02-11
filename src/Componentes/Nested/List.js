import { useContext } from "react"
import { DataContext } from "../../App"

export default function List() {    
    function listData(data = []) {
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
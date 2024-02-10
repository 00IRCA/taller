import List from "./List";

export default function ListContainer({data}) {
    return (
        <div>
            <h2>Contenedor Lista</h2>
            <List data={data}/>
        </div>
    )
}
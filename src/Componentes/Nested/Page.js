import ListContainer from "./ListContainer";

export default function Page({data}) {
    return (
        <div>
            <h1>Página</h1>
            <ListContainer data={data}/>
        </div>
    )
}
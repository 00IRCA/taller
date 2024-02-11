import { useEffect, useState } from "react"

export default function EffectList() {
    const [data, setData] = useState([]) 
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        //Delay de 3 segundos para simular retraso en servidor
        setTimeout(getData, 3000)
    }, [loaded])

    async function getData() {
        //Traer datos del servidor y cambiar estado
        fetch("http://localhost:3001/itemsList")
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setLoaded(true)})  
    }

    function listData(){
        return (
            <ul>
                {data.map((element) => <li>{element.name}</li>)}
            </ul>
        )
    }

    return (
        loaded 
        ? listData()
        : <span>Cargando ...</span>
    )
}
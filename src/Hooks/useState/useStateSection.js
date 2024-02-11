import { useState } from "react"

export default function UseStateSection() {
    const [contador, setContador] = useState(0)
    const [contador2, setContador2] = useState(0)

    function sumar (){
        /*La variable contador no se actualiza hasta el siguiente render,
        por lo que solo aumentará 1 unidad por click*/
        setContador(contador + 1)
        setContador(contador + 1)
        setContador(contador + 1)
        setContador(contador + 1)
    }

    function sumar2 (){
        /*setState puede recibir una funcion con parametro "n"
        para usar el valor "en cola"*/
        setContador2((n) => n+1)
        setContador2((n) => n+1)
        setContador2((n) => n+1)
        setContador2((n) => n+1)
    }

    return (
        <div>
            <h3>useState</h3>
            <button onClick={sumar}>boton</button>
            <span>{contador}</span>
            <br />
            <button onClick={sumar2}>boton</button>
            <span>{contador2}</span>
        </div>
    )
}
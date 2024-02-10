import Button from "./Button"
import ButtonProps from "./ButtonProps"

export default function ButtonsSection({title}) {
    //cambiar a true para comprobar
    const show = true
    
    if(show){
        return (
                <div>
                    <h2>{title}</h2>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Button />
                        <ButtonProps content={"Botón Props"} color={"red"} />
                    </div>
                </div>
        )
    }else{
        return <h2>No hay botones</h2>
    }
}
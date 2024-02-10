//Componente Button con props
export default function ButtonProps ({content, color}) {
    return (
        <button style={{"backgroundColor": color}}>
            {content}
        </button>
    )
}
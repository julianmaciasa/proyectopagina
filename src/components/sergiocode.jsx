//import { useState } from "react"
//export const Contadorboton = ({ value }) => {
    
    const [contador, setContador] = useState (value)
    
    const handleClick = () => {
        value +=1
        console.log = (value)
    }

    return (
        <>
            <h1> Contador: </h1>
            <p> {contador} </p>
            <button onClick={handleClick}>
                I am a button 
            </button>
        </>
    )
//}
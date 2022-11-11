import { useState, useEffect } from 'react'
import './style.scss'

export function LessonThirteen() {

    // const [contador, setContador] = useState(0)
    // const [userName, setUserName] = useState('')
    // const [userNameError, setUserNameError] = useState(false)
    const [pedido, setPedido] = useState('')

    // function adicionarMaisUm() {
    //     setContador(contador + 1)
    // }

    const [cancelaPedido, setCancelaPedido] = useState(false)

    function removePedido(evento){

        evento.preventDefault()

        alert('Seu pedido foi cancelado')

        setCancelaPedido(true);

    }

    useEffect(() => {

        setTimeout(() =>{

            console.log('componente atualizado')
            setPedido('Pizza')


        },2000)

        
    }, []
    )

    return (
        <>
            {/* <input type="text" value={userName} onChange={event => setUserName(event.target.value)}></input>

            <p>O valor do contador é: {contador}</p>
            <button onClick={() => adicionarMaisUm()}>Add+1</button> */}

            {
                cancelaPedido ? (

                    null

                ) : <h1>Pedido: {pedido}</h1>
                
            }

            

            <button onClick={evento => removePedido(evento)}>Cancelar Pedido.</button>

        </>
    )

}
import { useState } from 'react'
import { useEffect } from 'react'
import './style.scss'

export function LessonSeventeen() {

    const apiUrl = 'https://jsonplaceholder.typicode.com'
    const [posts, setPosts] = useState([])

    //useEffect para get
    useEffect(() => {
        fetch(`${apiUrl}/posts`).then(
            response => {
                response.json().then(
                    data => //setPosts(data)
                        console.log(data)
                )
            }
        )
    })

    return (
        <ul>
            <div className='seventeen-component'>
                <section className='card'>
                    <h2>Nome do retorno da rota, exemplo posts, fotos...</h2>
                    <ul className='componentes-finded-card'>
                        <li>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consequuntur cupiditate laborum labore nulla. Cum similique hic quis, deserunt eveniet fuga soluta dolores cupiditate nesciunt illum porro, consequuntur sint adipisci.</h3>
                            <p>teste</p>
                            <p>teste1</p>
                        </li>
                    </ul>
                </section>
            </div>

        </ul>

    )
}
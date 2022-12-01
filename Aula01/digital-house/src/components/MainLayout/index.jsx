import { Link, Outlet } from 'react-router-dom'
import './style.scss'

export function MainLayout(){

    const aulas = [
        {
            id:2,
            descricao:'lesson-two'
        },
        {
            id:3,
            descricao:'lesson-three'
        },
        {
            id:4,
            descricao:'lesson-four'
        },
        {
            id:7,
            descricao:'lesson-seven'
        },
        {
            id:13,
            descricao:'lesson-thirteen'
        },
        {
            id: 14,
            descricao: 'lesson-fourteen'
        },
        {
            id: 15,
            descricao: 'lesson-fifteen'
        },
        {
            id: 17,
            descricao: 'lesson-seventeen'
        },
        {
            id: 999,
            descricao: 'lesson-todo'
        }
    ]

    return (
        <div className="main-layout-component">
            <nav className='main-layout-component-header'>
                
                <h1>Index</h1>

                {
                    aulas.map(
                        aula => {
                            return(
                                <ul>
                                    <li>                                        
                                        <Link to={aula.descricao}>
                                            {`${aula.descricao.split('-')[0].charAt(0).toUpperCase() + aula.descricao.split('-')[0].slice(1) 
                                                + ' ' + 
                                                aula.descricao.split('-')[1].charAt(0).toUpperCase() + aula.descricao.split('-')[1].slice(1)}`}
                                        </Link>
                                    </li>
                                </ul>
                            )
                        }
                    )
                }


                

            </nav>

            <main className='main-layout-component-main'>

                <p>Content loaded</p>

                <Outlet />
                
            </main>
        </div>
    )
}
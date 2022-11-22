import { Link, Outlet } from 'react-router-dom'
import './style.scss'

export function MainLayout(){
    return (
        <div className="main-layout-component">
            <header className='main-layout-component-header'>
                
                <h1>Layout principal</h1>


                <ul>

                    <li>

                        <Link to="lesson-fourteen">Lesson Fourteen</Link>

                    </li>

                    <li>

                        <Link to="lesson-fifteen">Lesson Fifteen</Link>

                    </li>
                    
                </ul>

            </header>

            <main className='main-layout-component-main'>

                <p>o conteudo carregado</p>

                <Outlet />
                
            </main>
        </div>
    )
}
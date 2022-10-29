import './style.scss'

import ytImage from './../../assets/images/yt-home.png'
import spotifyImage from './../../assets/images/spotify.png'
import ytImagemHeader from './../../assets/images/yt-header.png'
import ytImagemLeftSideMenu from './../../assets/images/yt-leftside-menu.png'
import { LessonFiveItem } from '../../components/LessonFiveItem'
import { LessonFiveTableActivityItem } from '../../components/LessonFiveTableActivityItem'

export function LessonFive(){

    const componentsFinded = [
        {
            id:1,
            title:'Vídeo Component',
            image: ytImage,
            text:'Youtube Home'
        },
        {
            id:2,
            title:'Input Component',
            image: spotifyImage,
            text:'Spotify Home'
        }
    ]

    const componentsFindedLessonTwo = [
        {
            id:1,
            site:'Youtube',
            url:'https://www.youtube.com/',
            elementos:['O header poderia ser um componente','Barra do lado esquerdo'],
            imagens:[ytImagemHeader,ytImagemLeftSideMenu]
        }
    ]

    // componentsFinded.map()

    return(
        <div className='lesson-five-component'>            

            <h1 className='main-title'>Quinta Aula - [Itens de Componentes]</h1>        

            <ul className='components-finded-lesson-two'>
                <h1>-----------------------</h1>
                <h2>Atividade Mesa Aula 05</h2>
                {
                    componentsFindedLessonTwo.map(
                        componente =>{
                            return(

                                <LessonFiveTableActivityItem chave={componente.id} itemComponente={componente}/>  

                            )
                        }
                    )
                }
                  
                <h1>-----------------------</h1>
                

            </ul>

            
            
            <ul className='components-finded'>

                {

                    componentsFinded.map(

                        component => {
                            return(

                                <LessonFiveItem 
                                    key={component.id} 
                                    item={component}
                                /> 

                                

                            )
                        }


                    )


                }


                
            </ul>
        </div>
    )

}




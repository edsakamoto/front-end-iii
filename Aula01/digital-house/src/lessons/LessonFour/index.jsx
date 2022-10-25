import './style.scss'
import ytImage from './../../assets/images/yt-home.png'
import spotifyImage from './../../assets/images/spotify.png'
export function LessonFour(){

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

    // componentsFinded.map()

    return(
        <div className='lesson-four-component'>
            <h1 className='main-title'>Quarta Aula - [Componentes Identificados]</h1>
            <ul className='components-finded'>

                {

                    componentsFinded.map(

                        component => {
                            return(

                                <li key={component.id}>
                                    <img src={component.image} alt="" />
                                    <h1>{component.title}</h1>
                                    <p>{component.text}</p>
                                </li>

                            )
                        }


                    )


                }


                
            </ul>
        </div>
    )
}
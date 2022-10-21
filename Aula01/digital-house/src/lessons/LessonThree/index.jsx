import './style.scss'
import batataGif from './../../assets/images/batata.gif'

export function LessonThree(){

    // const title = 'TESTE'
    
    const components = [
        
        {
           name: 'Component Card'
          ,description: 'teste'
          ,image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'
        },
        {
            name: 'Component maaaapppppp'
           ,description: 'asdjhasjkdhakjdh'
           ,image: batataGif
         }

    ]


    return(
        <main>
            {/* <img src={batataGif} /> */}
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                {
                    components.map(component =>(
                        
                        <li>
                            <img src={component.image}/>
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                        </li>

                    ))                    
                }
                
            </ul>
        </main>
    )
}
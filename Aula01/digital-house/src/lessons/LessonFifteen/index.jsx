import { useState } from "react"
import { LessonFifteenItem } from "../../components/LessonFifteenItem"
import './style.scss'

export function LessonFifteen(){

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')
    const [cepError,setCepError] = useState(false)

    function searchCep(cepReceived){

        setCep(cepReceived)
        if(cepReceived.length === 8){
            fetch(`https://viacep.com.br/ws/${cepReceived}/json/`).then(
                response => {
                    response.json().then(
                        address =>{
                            if(address.erro !== undefined){
                                setCepError(true)
                                
                            } else {
                                setCepError(false)
                                setLocations([...locations,address])
                                // console.log('passou aqui')
                                
                            }
                        }
                    )
                }
            )
        }
        
    }

    function deleteLocation(currentLocation){
        console.log(currentLocation)
        console.log(locations)
    }


    return(


        <div className="lesson-fifteen-component">

            <form>
                <h1>Cadastrar endereços</h1>

                <div>
                    <label>Cep</label>
                    <input 
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)}
                        // onChange={event =>searchCep(event.target.value)}
                    />
                </div>
                
                <button>Cadastrar</button>
                {
                    cepError ? (
                        <span>cep digitado n existe</span>
                    ) : null
                }
                
                

            </form>
            

            <section className="locations">
                {
                    
                    locations.map(
                        (location,index) =>(
                            <LessonFifteenItem 
                                key={index}
                                data={location}
                                onDeleteLocation={currentLocation =>deleteLocation(currentLocation)}                            
                            />
                        )
                    )
                }
            </section>
        </div>
    )
}
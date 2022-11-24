import { useState } from 'react'
import { useEffect } from 'react'
import './style.scss'
export function Todo(){

    const apiUrl = 'https://ctd-fe2-todo-v2.herokuapp.com/v1'
    const [authToken, setAuthToken] = useState('')
    const [tasks,setTasks] = useState([])
    const [taskName,setTaskName] = useState('')
    const [taskNameError, setTaskNameError] = useState(false)

    
    //useEffect de login
    useEffect(() =>{

        const userData = {
            email:'usertesteaulateste@mail.com',
            password: '1234'
        }
    
        const requestheaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
        const requestConfig = {
            method: 'POST',
            headers: requestheaders,
            body: JSON.stringify(userData)
        }

        fetch(`${apiUrl}/users/login`, requestConfig).then(
            response => {
                if(response.ok){
                    response.json().then(
                    data => {
                        setAuthToken(data.jwt)
                        
                    }
                ) 

                } else {
                    alert('senha errada')
                }
                
            }
        )

    },[])

    //useEffect de get de tasks
    useEffect(() => {

        if(authToken !== ''){

            const requestheaders = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authToken
            }
    
            const requestConfig = {
                
                headers: requestheaders
                
            }
    
            fetch(`${apiUrl}/tasks`,requestConfig).then(
                response =>{
                    response.json().then(
                        data => setTasks(data)
                    )
                }
            )

        }

        

    },[authToken])

    //useEffect para validar o formulario
    useEffect(() =>{

        if(taskName.length > 4){

            setTaskNameError(false)

        } else {

            setTaskNameError(true)

        }

    },[taskName])

    function createTask(event){

        event.preventDefault()

        const requestheaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': authToken
        }

        const requestBody = JSON.stringify({
            description: taskName,
            completed: false
        })

        const requestConfig = {
            method: 'POST',
            headers: requestheaders,
            body: requestBody
            
        }

        fetch(`${apiUrl}/tasks`,requestConfig).then(
            response =>{
                response.json().then(
                    data => {
                        setTasks([...tasks, data])
                    }
                )
            }
        )
    }

    function deleteTask(id){

        const requestheaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': authToken
        }

        

        const requestConfig = {
            method: 'DELETE',
            headers: requestheaders
            
            
        }

        fetch(`${apiUrl}/tasks/${id}`,requestConfig).then(
            response =>{
                response.json().then(
                    data => {
                        setTasks(

                            tasks.filter(
                                task => {

                                    if(task.id !== id){
                                        return task
                                    }

                                }
                            )
                        )
                    }
                )
            }
        )


    }

    return(
        <div className="to-do-component">
        
            <form className={taskNameError ? 'form-error': ''} onSubmit={event => createTask(event)}>
                <h1>Cadastre uma nova tarefa</h1>
                <div className='form-controller'>
                    <label htmlFor="">Nome </label>
                    <input type="text" 
                           value={taskName} 
                           onChange={event => setTaskName(event.target.value)} 
                    />                    
                    <small>Por favor, digite o nome com mais de 4 caracteres</small>
                    
                </div>                
                <button disabled={taskNameError} onClick={createTask}>Cadastrar</button>
            </form>

            <main>
                <h1>Tarefas criadas</h1>
                <section>

                    {
                        tasks.map(
                            task => (
                                <div key={task.id}>
                                    <h1>{task.description}</h1>
                                    <button onClick={() => deleteTask(task.id)}>Deletar</button>
                                </div>
                            )
                        )
                    }
                   
                </section>
            </main>
        </div>
    )
}
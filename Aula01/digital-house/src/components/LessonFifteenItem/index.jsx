import './style.scss'

export function LessonFifteenItem(props){
    return(
        <div className='lesson-fifteen-item'>
            <h1>Endereço Cadastrado</h1>
            <address>{props.data.logradouro}, {props.data.bairro} - {props.data.localidade}({props.data.uf})</address>
            <small>{props.data.cep}</small>
            <button onClick={() =>props.onDeleteLocation(props.data)}>Deletar</button>
        </div>
    )
}
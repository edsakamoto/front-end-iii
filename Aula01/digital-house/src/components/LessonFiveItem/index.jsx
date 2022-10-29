export function LessonFiveItem(props){

    console.log(props)

    return(

        // <></>
        <li key={props.item.id}>
            <img src={props.item.image} alt="" />
            <h1>{props.item.title}</h1>
            <p>{props.item.text}</p>
        </li>
    )
}
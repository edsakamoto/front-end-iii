export function LessonServenCardProduct(props){

    

    return(        
        <div>        
        <img src={props.productData.picture} alt="" />
        <h1>{props.productData.name}</h1>
        <p>{props.productData.price}</p>

        </div>

    )


}
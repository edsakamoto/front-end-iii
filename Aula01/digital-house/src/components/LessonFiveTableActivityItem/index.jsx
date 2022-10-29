export function LessonFiveTableActivityItem(props){

    console.log(props)

    return(

        <div>
            {
                props.itemComponente.imagens.map(
                    imagem =>{
                        return (

                            <img src={imagem} alt="" />

                        )
                    }
                )
            }
            
        </div>

    )

}

/*
 id:1,
 site:'Youtube',
 url:'https://www.youtube.com/',
 elementos:['O header poderia ser um componente','Barra do lado esquerdo'],
 imagem:[ytImagemHeader,ytImagemLeftSideMenu]

*/
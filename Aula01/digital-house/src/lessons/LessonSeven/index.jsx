import { useState } from 'react';
import { LessonServenCardProduct } from '../../components/LessonSevenCardProduct';
import './style.scss'

export function LessonSeven(){


    // let contador = 0;
    // const [contador, setContador] = useState(0)

    // function somarNumero(){

    //     // contador += 1
    //     // contador+=1
    //     // console.log(contador);

    //     setContador(contador+1)

    // }

    



    // const allProducts = [
    //     {
    //         id: 1,
    //         name: 'Xbox',
    //         price: '3.000',
    //         picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
    //     },
    //     {
    //         id: 2,
    //         name: 'Playstation 5',
    //         price: '5.000',
    //         picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
    //     },
    //     {
    //         id: 3,
    //         name: 'Switch',
    //         price: '2.000',
    //         picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
    //     }
    // ]

    const [nomeProduto, setNomeProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [imagemProduto, setImagemProduto] = useState('')

    const [allProducts,setAllProducts] = useState(
        [
            {
                id: 1,
                name: 'Xbox',
                price: '3.000',
                picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
            },
            {
                id: 2,
                name: 'Playstation 5',
                price: '5.000',
                picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
            },
            {
                id: 3,
                name: 'Switch',
                price: '2.000',
                picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
            }
        ]        
    )

    const newProduct = {
        id: 4,
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function adicionaProduto(){

        setAllProducts([...allProducts, newProduct])
    }

    function cadastrarProduto(evento){

        evento.preventDefault()

        const novoProdutoCadastrado ={
            name: nomeProduto,
            price: precoProduto,
            picture: imagemProduto

        }

        setAllProducts([...allProducts,novoProdutoCadastrado])

        setNomeProduto('')
        setPrecoProduto('')
        setImagemProduto('')
    }

    return (        

        <main className="lesson-seven-component">

        <div className="tittle-wrapper">
            <h1>Produtos</h1>
            <button onClick={adicionaProduto}>Adicionar novo produto</button>
        </div>

        <form>

            <div>
                <label htmlFor="">Nome produto</label>
                <input id="nomeProduto" type="text" value={nomeProduto} onChange={evento =>setNomeProduto(evento.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Preço</label>
                <input id="precoProduto" type="text" value={precoProduto} onChange={evento =>setPrecoProduto(evento.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Imagem URL</label>
                <input id="imagemProduto" type="text" value={imagemProduto} onChange={evento =>setImagemProduto(evento.target.value)}/>
            </div>

            <button type="submit" onClick={evento => cadastrarProduto(evento)}>Cadastrar Produto</button>

        </form>

        <section className='products'>
            {
                allProducts.map(
                    product => {
                        return (
                            // <SetimaAulaCardProduto
                            //     productData={product}
                            // />
                            <LessonServenCardProduct
                            productData={product}
                            chave={product.id}
                        />
                        )
                    }
                )
            }
        </section>

    </main>

    )

}
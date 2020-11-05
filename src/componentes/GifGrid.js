import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'



export const GifGrid = ({categoria}) => {

    const {data, loading} = useFetchGifs(categoria)

    
    

    return (
        
        <div>
            <h1>{categoria}</h1>
            {loading ? <h1>Cargando...</h1>:null}
            <ul className="list-group" >
                
           {
           
            data.map(images=>
                (
                   <GifItem key={images.id} images={images}/>
                )
            )
            } 
            </ul>
        </div>
    )
}

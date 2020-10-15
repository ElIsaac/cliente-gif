import React, {useState, useEffect} from 'react'
import { GifItem } from './GifItem'


import {getGifs} from '../helpers/getGifs'

export const GifGrid = ({categoria}) => {

    const [images, setImages] = useState([])

    useEffect(() => {

        getGifs(categoria).then( setImages )
       
    }, [categoria])
    
    

    return (
        
        <div>
            <h1>{categoria}</h1>
            <ul className="list-group" >
            {
            images.map(images=>
                (
                   <GifItem key={images.id} images={images}/>
                )
            )
            }
            </ul>
        </div>
    )
}

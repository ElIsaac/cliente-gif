import React, { useState } from 'react'
import AddCategory from './AddCategory'
import { GifGrid } from './GifGrid'
export default function GifExpertApp() {
    const [categoria, setCategoria] = useState(["bolo"])
   
    return (

        <div className="container">
           
            <hr className="my-4" />
            <div className="card text-white bg-dark mb-3" >
               
                <div className="card-body">
                    <h2 className="card-title"> Gif Expert app </h2>
                   </div>
            </div>

            <AddCategory categoria={categoria}  setCategoria={setCategoria}   />
             
                <div className="" >
    
                {
                    categoria.map((item, i) => {
                        return (  <GifGrid key={i} categoria={item} /> )
                    })
                }
                </div>
               
               
            

        </div>
    )
}

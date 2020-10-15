import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function AddCategory({setValor, Categoria: categoria, setCategoria}) {
    const [inputValue, setInputValue] = useState("");
    const cambio =(e)=>{
        setInputValue(e.target.value)
    }
    const enviar=(e)=>{
        if(inputValue.trim().length > 3){
            e.preventDefault()
        setCategoria(cate => [inputValue,...cate])
        setInputValue("")
        }
    }
    return (
        <div className="card">
            
        <form 
        onSubmit={enviar}>
        
            <input
            className="form form-control"
                type="text"
                onChange={(e)=>cambio(e)}
                value={inputValue}
            />
        </form>

        </div>
    )
}

AddCategory.propTypes={
    setCategoria: PropTypes.func.isRequired
}

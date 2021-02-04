import React from 'react';
import { useDispatch } from 'react-redux';

const Adicionar = () => {
    const dispatch = useDispatch()

    return (
        <div>
            
            <button onClick={() => dispatch({ type: 'ADICIONAR_AO_CARRINHO'})}>+</button>
        </div>
    )
}

export default Adicionar
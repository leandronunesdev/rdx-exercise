import React from 'react'
import { useDispatch } from 'react-redux'

const Remover = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Produto</h2>
            <button onClick={() => dispatch({ type: 'REMOVER_DO_CARRINHO'})}>-</button>
        </div>
    )
}

export default Remover
import React from 'react'
import { useSelector } from 'react-redux'
import { interfaceStore } from '../../Types/interfaces'

const Carrinho = () => {
    const valorDoCarrinho = useSelector((state: interfaceStore) => state.carrinho)
    return (
        <p>{valorDoCarrinho}</p>
    )
}

export default Carrinho
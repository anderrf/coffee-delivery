import { useState } from 'react'
import { ProductQuantityContainer } from './styles'

interface ProductQuantityProps {
  quantity: number
  setQuantity: (newQuantity: number) => void
}

export function ProductQuantity({
  quantity,
  setQuantity,
}: ProductQuantityProps) {
  const handleAddProductQuantity = () => {
    const newQuantity = quantity + 1
    if (newQuantity > 99) {
      return
    }
    setQuantity(newQuantity)
  }

  const handleSubtractProductQuantity = () => {
    const newQuantity = quantity - 1
    if (newQuantity < 1) {
      return
    }
    setQuantity(newQuantity)
  }

  return (
    <ProductQuantityContainer>
      <button onClick={handleSubtractProductQuantity}>
        <span>&minus;</span>
      </button>
      <label>{quantity}</label>
      <button onClick={handleAddProductQuantity}>
        <span>&#43;</span>
      </button>
    </ProductQuantityContainer>
  )
}

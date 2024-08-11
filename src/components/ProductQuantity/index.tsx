import { useState } from 'react'
import { ProductQuantityContainer } from './styles'

export function ProductQuantity() {
  const [quantity, setQuantity] = useState(1)

  return (
    <ProductQuantityContainer>
      <button>
        <span>&#43;</span>
      </button>
      <label>{quantity}</label>
      <button>
        <span>&minus;</span>
      </button>
    </ProductQuantityContainer>
  )
}

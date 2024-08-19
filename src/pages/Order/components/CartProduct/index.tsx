import { Trash } from 'phosphor-react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import {
  Price,
  ProductDisplayCol,
  ProductDisplayRow,
  RemoveButton,
  SelectedProductContainer,
} from './styles'
import { SelectedProduct } from '../../../../contexts/CoffeesContext'

interface CartProductProps {
  selectedProduct: SelectedProduct
}

export function CartProduct({ selectedProduct }: CartProductProps) {
  const { product, quantity } = selectedProduct
  const { image, title, unitPrice } = product

  return (
    <SelectedProductContainer>
      <ProductDisplayRow>
        <img src={`src/assets/images/${image}`} alt={title} />
        <ProductDisplayCol>
          <p>{title}</p>
          <ProductDisplayRow>
            <ProductQuantity quantity={quantity} />
            <RemoveButton>
              <span>
                <Trash size={20} />
              </span>
              <span>REMOVER</span>
            </RemoveButton>
          </ProductDisplayRow>
        </ProductDisplayCol>
      </ProductDisplayRow>
      <Price>R$ {unitPrice * quantity}</Price>
    </SelectedProductContainer>
  )
}

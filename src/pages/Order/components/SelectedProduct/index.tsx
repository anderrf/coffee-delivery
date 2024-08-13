import { Trash } from 'phosphor-react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import { CoffeeProduct } from '../../../Home'
import {
  Price,
  ProductDisplayCol,
  ProductDisplayRow,
  RemoveButton,
  SelectedProductContainer,
} from './styles'

interface SelectedProductProps {
  product: CoffeeProduct
}

export function SelectedProduct({ product }: SelectedProductProps) {
  const { unitPrice, image, title } = product
  return (
    <SelectedProductContainer>
      <ProductDisplayRow>
        <img src={`src/assets/images/${image}`} alt={title} />
        <ProductDisplayCol>
          <p>{title}</p>
          <ProductDisplayRow>
            <ProductQuantity />
            <RemoveButton>
              <span>
                <Trash size={20} />
              </span>
              <span>REMOVER</span>
            </RemoveButton>
          </ProductDisplayRow>
        </ProductDisplayCol>
      </ProductDisplayRow>
      <Price>R$ {unitPrice}</Price>
    </SelectedProductContainer>
  )
}

import { Trash } from 'phosphor-react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import {
  Price,
  ProductDisplayCol,
  ProductDisplayRow,
  RemoveButton,
  SelectedProductContainer,
} from './styles'
import { SelectedProduct } from '../../../../reducers/Coffees/reducer'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

interface CartProductProps {
  selectedProduct: SelectedProduct
}

export function CartProduct({ selectedProduct }: CartProductProps) {
  const { product, quantity } = selectedProduct
  const { image, title, unitPrice } = product
  const { editProductOnCart, removeProductFromCart } =
    useContext(CoffeesContext)

  const setQuantity = (newQuantity: number) => {
    const productToEdit = {
      product,
      quantity: newQuantity,
    }
    editProductOnCart(productToEdit)
  }

  const handleRemoveProduct = () => {
    removeProductFromCart({ product, quantity })
  }

  return (
    <SelectedProductContainer>
      <ProductDisplayRow>
        <img src={`src/assets/images/${image}`} alt={title} />
        <ProductDisplayCol>
          <p>{title}</p>
          <ProductDisplayRow>
            <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
            <RemoveButton onClick={handleRemoveProduct}>
              <span>
                <Trash size={20} />
              </span>
              <span>REMOVER</span>
            </RemoveButton>
          </ProductDisplayRow>
        </ProductDisplayCol>
      </ProductDisplayRow>
      <Price>R$ {(unitPrice * quantity).toFixed(2)}</Price>
    </SelectedProductContainer>
  )
}

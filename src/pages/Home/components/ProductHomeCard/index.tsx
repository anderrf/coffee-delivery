import { ShoppingCart } from 'phosphor-react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import {
  AddToCartButton,
  CardActions,
  CardTags,
  ProductHomeCardContainer,
} from './styles'
import { useContext, useState } from 'react'
import {
  CoffeeProduct,
  CoffeesContext,
} from '../../../../contexts/CoffeesContext'

interface ProductProps {
  coffee: CoffeeProduct
}

export function ProductHomeCard({ coffee }: ProductProps) {
  const { title, image, tags, description, unitPrice } = coffee
  const { addProductToCart } = useContext(CoffeesContext)
  const [quantity, setQuantity] = useState(1)

  const handleAddProductToCart = () => {
    if (quantity < 1 || quantity > 99) {
      return
    }
    const productToAdd = {
      product: coffee,
      quantity,
    }
    addProductToCart(productToAdd)
    setQuantity(1)
  }
  return (
    <ProductHomeCardContainer>
      <img src={`src/assets/images/${image}`} />
      <h4>{title}</h4>
      <CardTags>
        {tags.map((tag) => {
          return (
            <div key={tag}>
              <span>{tag}</span>
            </div>
          )
        })}
      </CardTags>
      <p>{description}</p>
      <CardActions>
        <label>
          R&#36;<span>{unitPrice}</span>
        </label>
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton onClick={handleAddProductToCart}>
          <ShoppingCart size={24} />
        </AddToCartButton>
      </CardActions>
    </ProductHomeCardContainer>
  )
}

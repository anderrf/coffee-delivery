import { ShoppingCart } from 'phosphor-react'
import { CoffeeProduct } from '../..'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import {
  AddToCartButton,
  CardActions,
  CardTags,
  ProductContainer,
} from './styles'

interface ProductProps {
  coffee: CoffeeProduct
}

export function Product({ coffee }: ProductProps) {
  const { title, image, tags, description, unitPrice } = coffee
  return (
    <ProductContainer>
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
        <ProductQuantity></ProductQuantity>
        <AddToCartButton>
          <ShoppingCart size={24} />
        </AddToCartButton>
      </CardActions>
    </ProductContainer>
  )
}

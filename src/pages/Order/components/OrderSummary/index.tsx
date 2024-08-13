import { useState } from 'react'
import {
  ConfirmOrderButton,
  OrderSummaryContainer,
  SelectedProductsList,
  SummaryCard,
  TotalPriceInfo,
} from './styles'
import { fixedCoffees } from '../../../Home'
import { SelectedProduct } from '../SelectedProduct'

export function OrderSummary() {
  const [products, setProducts] = useState([fixedCoffees[0], fixedCoffees[1]])
  const [productsTotal, setProductsTotal] = useState(0)
  const entrega = 3.5
  const [orderTotal, setOrderTotal] = useState(0)
  return (
    <OrderSummaryContainer>
      <h3>Cafés selecionados</h3>
      <SummaryCard>
        <SelectedProductsList>
          {products.map((product) => {
            return <SelectedProduct product={product} key={product.id} />
          })}
        </SelectedProductsList>
        <TotalPriceInfo>
          <p>
            <span>Total de itens</span>
            <label>R$ {productsTotal}</label>
          </p>
          <p>
            <span>Entrega</span>
            <label>R$ {entrega}</label>
          </p>
          <p>
            <strong>
              <span>Total</span>
            </strong>
            <strong>
              <label>R$ {orderTotal}</label>
            </strong>
          </p>
        </TotalPriceInfo>
        <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
      </SummaryCard>
    </OrderSummaryContainer>
  )
}

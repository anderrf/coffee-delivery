import { useContext, useState } from 'react'
import {
  ConfirmOrderButton,
  OrderSummaryContainer,
  SelectedProductsList,
  SummaryCard,
  TotalPriceInfo,
} from './styles'
import { CartProduct } from '../CartProduct'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

export function OrderSummary() {
  const { selectedProducts } = useContext(CoffeesContext)
  const productsTotal = selectedProducts.length
    ? selectedProducts
        .map((product) => product.product.unitPrice)
        .reduce((priceA, priceB) => priceA + priceB)
    : 0
  const entrega = 3.5
  const orderTotal = productsTotal + entrega
  return (
    <OrderSummaryContainer>
      <h3>Cafés selecionados</h3>
      <SummaryCard>
        <SelectedProductsList>
          {selectedProducts.map((product) => {
            return <CartProduct product={product} key={product.product.id} />
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

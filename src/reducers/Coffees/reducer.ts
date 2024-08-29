import { produce } from 'immer'
import { ActionTypes, CoffeesReducerAction } from './actions'

export enum CoffeeTag {
  TRADICIONAL = 'TRADICIONAL',
  GELADO = 'GELADO',
  COM_LEITE = 'COM LEITE',
  ESPECIAL = 'ESPECIAL',
  ALCOOLICO = 'ALCOÓLICO',
}

export interface CoffeeProduct {
  id: string
  title: string
  description: string
  tags: CoffeeTag[]
  unitPrice: number
  image: string
}

export interface SelectedProduct {
  product: CoffeeProduct
  quantity: number
}

interface CoffeesState {
  selectedProducts: SelectedProduct[]
}

export function coffeesReducer(
  state: CoffeesState,
  action: CoffeesReducerAction,
) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        draft.selectedProducts.push(action.payload?.newSelectedProduct)
      })
    case ActionTypes.EDIT_PRODUCT_ON_CART: {
      const productIndex = state.selectedProducts.findIndex((product) => {
        return product.product.id === action.payload?.productToEdit.product.id
      })
      if (productIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.selectedProducts[productIndex].quantity =
          action.payload?.productToEdit.quantity
      })
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const productIndex = state.selectedProducts.findIndex((product) => {
        return (
          product.product.id === action.payload?.productToRemove?.product?.id
        )
      })
      if (productIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.selectedProducts.splice(productIndex, 1)
      })
    }
    default:
      return state
  }
}

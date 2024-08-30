import { CreateOrderData, SelectedProduct } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  EDIT_PRODUCT_ON_CART = 'EDIT_PRODUCT_ON_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  FINISH_ORDER = 'FINISH_ORDER',
}

export type CoffeesReducerAction = {
  type: string
  payload?: any
}

export function addProductToCartAction(newSelectedProduct: SelectedProduct) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      newSelectedProduct,
    },
  }
}

export function editProductOnCartAction(productToEdit: SelectedProduct) {
  return {
    type: ActionTypes.EDIT_PRODUCT_ON_CART,
    payload: {
      productToEdit,
    },
  }
}

export function removeProductFromCartAction(productToRemove: SelectedProduct) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productToRemove,
    },
  }
}

export function finishOrderAction(orderData: CreateOrderData) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: { orderData },
  }
}

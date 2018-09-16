import { createStore, applyMiddleware, Dispatch } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"

// JSON.parse(localStorage.getItem("nodcart"))

const exampleInitialState: GlobalState = {
  cartItems: []
}

// const exampleInitialState: GlobalState = JSON.parse(localStorage.getItem("nodcart"))

export interface ShopifyProduct {
  id?: string
  compareAtPrice?: string
  image?: {
    originalSrc: string
  }
  price?: string
  selectedOptions?: Array<{
    name: string
    value: string
  }>
  title?: string
  metaData?: string
  quantity?: number
}

export const actionTypes = {
  TICK: "TICK",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  ADD_TO_CART: "ADD_TO_CART",
  SET_SELECTED_PRODUCT: "SET_SELECTED_PRODUCT",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  INCREASE_ITEM_QUANTITY: "INCREASE_ITEM_QUANTITY"
}

type ActionEnum =
  | "TICK"
  | "INCREMENT"
  | "DECREMENT"
  | "RESET"
  | "ADD_TO_CART"
  | "SET_SELECTED_PRODUCT"
  | "REMOVE_ITEM_FROM_CART"
  | "INCREASE_ITEM_QUANTITY"

interface Action {
  type: ActionEnum
  product: ShopifyProduct
  id: string
}

export interface GlobalState {
  cartItems?: ShopifyProduct[]
  count?: number
  selectedProduct?: ShopifyProduct
}

// REDUCERS
export const reducer = (
  state: GlobalState = exampleInitialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.ADD_TO_CART:
      if (state.cartItems) {
        return Object.assign({}, state, {
          cartItems: state.cartItems.concat([state.selectedProduct])
        })
      } else {
        return Object.assign({}, state, {
          cartItems: [state.selectedProduct]
        })
      }
    case actionTypes.SET_SELECTED_PRODUCT:
      // const copy = Object.assign({}, action.product)
      // copy.quantity = 1
      return Object.assign({}, state, {
        selectedProduct: action.product 
      })
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(
          (item: ShopifyProduct) => action.id !== item.id
        )
      })
    case actionTypes.INCREASE_ITEM_QUANTITY:
     
      const cartItemsCopy = Object.assign([], state.cartItems)
      cartItemsCopy.forEach((item: ShopifyProduct) => {
        if (item.id === action.id) {
          if(!item.quantity) {
            item.quantity = 0
          }
          item.quantity++
          console.log('quantity', item.quantity)
        }
      })

      // for(const i in copy) {
      //   if(copy[i].id === action.id) {
      //     copy[i].quantity++
      //     break
      //   }
      // }
      return Object.assign({}, state, {
        cartItems: cartItemsCopy
      })
    default:
      return state
  }
}

// ACTIONS
// export const serverRenderClock = (isServer: boolean) => (dispatch: any) => {
//   return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
// }

// export const startClock = (dispatch: any) => {
//   return setInterval(() => {
//     // Dispatch `TICK` every 1 second
//     dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
//   }, 1000)
// }

export const incrementCount = () => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const addToCart = () => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.ADD_TO_CART })
}

export const setSelectedProduct = (product: ShopifyProduct) => (
  dispatch: Dispatch
) => {
  return dispatch({ type: actionTypes.SET_SELECTED_PRODUCT, product })
}

export const removeItemFromCart = (id: string) => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.REMOVE_ITEM_FROM_CART, id })
}

export const increaseItemQuantity = (id: string) => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.INCREASE_ITEM_QUANTITY, id })
}

// export const decrementCount = () => dispatch => {
//   return dispatch({ type: actionTypes.DECREMENT })
// }

// export const resetCount = () => dispatch => {
//   return dispatch({ type: actionTypes.RESET })
// }

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

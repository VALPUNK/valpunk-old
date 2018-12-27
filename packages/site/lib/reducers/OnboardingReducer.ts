import { Dispatch } from "redux"

export interface OnBoardingState {
  selectedProduct: ProductPlan
  accountCreated: boolean
  instagram?: {
    userName: string
    password: string
    similarAccounts: string[]
    locations: string[]
    autoLike: boolean
    autoComment: boolean
    autoDirectMessage: boolean
    comments: string[]
    directMessages: string[]
  }
  finished: boolean
  activeStep: number
  customer: CustomerInfo
}

export interface ProductPlan {
  planId?: string
  planPrice?: number
  planName?: string
  planDetails?: PlanDetail[]
  planSubheading?: string
}

export interface PlanDetail {
  id: string
  value: string
}

export const actionTypes = {
  SET_CURRENT_PLAN: "SET_CURRENT_PLAN",
  IS_ACCOUNT_CREATED: "IS_ACCOUNT_CREATED",
  IS_FINISHED: "IS_FINISHED",
  HANDLE_NEXT_STEP: "HANDLE_NEXT_STEP",
  HANDLE_BACK_STEP: "HANDLE_BACK_STEP",
  SET_CUSTOMER_ID: "SET_CUSTOMER_ID"
}

export type PlanEnum = "PERSONAL" | "BUSINESS"

type ActionEnum =
  | "SET_CURRENT_PLAN"
  | "IS_ACCOUNT_CREATED"
  | "IS_FINISHED"
  | "HANDLE_BACK_STEP"

export const initialState: OnBoardingState = {
  selectedProduct: {
    planId: "",
    planDetails: [{ id: "", value: "" }],
    planPrice: 0,
    planName: ""
  },
  accountCreated: false,
  finished: false,
  activeStep: 0,
  customer: {
    customerId: "",
    stripeCustomerId: ""
  }
}

interface Action {
  type: ActionEnum
  plan: ProductPlan
  created: boolean
  finished: boolean
  customer: CustomerInfo
}

export const onBoardingReducer = (
  state: OnBoardingState = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.SET_CUSTOMER_ID:
      console.log("here")
      return Object.assign({}, state, {
        customer: {
          customerId: action.customer.customerId,
          stripeCustomerId: action.customer.stripeCustomerId
        }
      })

    case actionTypes.SET_CURRENT_PLAN:
      console.log("redux action", action)
      return Object.assign({}, state, {
        selectedProduct: action.plan
      })
    case actionTypes.IS_ACCOUNT_CREATED:
      return Object.assign({}, state, {
        accountCreated: action.created
      })
    case actionTypes.IS_FINISHED:
      return Object.assign({}, state, {
        finished: action.finished
      })
    case actionTypes.HANDLE_NEXT_STEP:
      console.log("hello", state.activeStep)

      return Object.assign({}, state, {
        activeStep: state.activeStep + 1
      })

    case actionTypes.HANDLE_BACK_STEP:
      return Object.assign({}, state, {
        activeStep: state.activeStep - 1
      })
    default:
      return state
  }
}

export interface CustomerInfo {
  customerId: string
  stripeCustomerId: string
}

export const setCurrentPlan = (plan: ProductPlan) => (dispatch: Dispatch) => {
  console.log("current plan redux ", plan)
  return dispatch({ type: actionTypes.SET_CURRENT_PLAN, plan })
}

export const setCustomerId = (customer: CustomerInfo) => (
  dispatch: Dispatch
) => {
  return dispatch({ type: actionTypes.SET_CUSTOMER_ID, customer })
}

export const isAccountCreated = (created: boolean) => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.IS_ACCOUNT_CREATED, created })
}

export const isFinished = (finished: boolean) => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.IS_ACCOUNT_CREATED, finished })
}

export const handleNextStep = (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.HANDLE_NEXT_STEP })
}

export const handleBackStep = (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.HANDLE_BACK_STEP })
}

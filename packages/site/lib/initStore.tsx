import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import {
  initialState as initState,
  onBoardingReducer
} from "~/lib/reducers/OnboardingReducer"

export function initializeStore(initialState = initState) {
  return createStore(
    onBoardingReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

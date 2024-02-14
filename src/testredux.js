import { ERROR_CONTACT, ERROR_FAQ, LOADING_CONTACT, SUCCESS_CONTACT, SUCCESS_FAQ } from '../actionsType'

const initialState = {
  error: '',
  loading: false,
  getData: null,
  errorFaq: '',
  getDataFaq: null
}
const appManagment = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CONTACT:
      state = {
        ...state,
        loading: true
      }
      break
    case SUCCESS_CONTACT:
      state = {
        ...state,
        getData: action.payload,
        loading: false,
        error: 200
      }
      break
    case ERROR_CONTACT:
      state = {
        ...state,
        getData: null,
        loading: false,
        error: action.payload
      }
      break
    case SUCCESS_FAQ:
      state = {
        ...state,
        getDataFaq: action.payload,
        errorFaq: 200
      }
      break
    case ERROR_FAQ:
      state = {
        ...state,
        getDataFaq: null,
        errorFaq: action.payload
      }
      break

    default:
      state = { ...state }
      break
  }
  return state
}
export default appManagment


// root 
import { combineReducers } from 'redux'

import appManagment from './appManagment'

const rootReducer = combineReducers({

  appManagment,

})
export default rootReducer

// store

import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'


import rootReducer from 'src/redux/reducers'
const middleware = [thunk]

export const store = createStore(rootReducer, {}, applyMiddleware(...middleware))

// action 

export const postBoosterAmount = (data) => async dispatch => {
    try {
      const response = await api.postBoosterAmount(data)
      if (response.data.data) {
        // setModal(false)
        toast.success(response.data.message)
        dispatch(getBoosterAmount(page, limit))
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)
      }
    }
  }


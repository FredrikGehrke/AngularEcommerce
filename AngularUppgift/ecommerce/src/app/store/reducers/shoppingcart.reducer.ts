import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'
import { IShoppingCart } from 'src/app/models/ishoppingcart.model'

const initialState: Array<IShoppingCart> = []

export function ShoppingCartReducer(state = initialState, action: Actions) {

    switch(action.type) {
        case ActionTypes.SHOPPINGCART_ADD :
            return state = [...state, action.payload]

        case ActionTypes.SHOPPINGCART_REMOVE :
            return state = state.filter(item => item.product._id !== action.payload) 

        case ActionTypes.SHOPPINGCART_INCREMENT :
            let _index = state.findIndex(p => {return p.product._id === action.payload.product._id }) 
            return state.map((item, index) => {
                if(index !== _index) {
                    return item
                } else {
                    let newItem = {product: item.product, quantity: item.quantity + 1}
                    return newItem
                }
            })

        case ActionTypes.SHOPPINGCART_DECREMENT :
            let _Dindex = state.findIndex(p => {return p.product._id === action.payload.product._id }) 
            return state.map((item, index) => {
                if(index !== _Dindex) {
                    return item
                } else {
                    let newItem = {product: item.product, quantity: item.quantity - 1}
                    return newItem
                }
            })

        default:
            return state
    }
}
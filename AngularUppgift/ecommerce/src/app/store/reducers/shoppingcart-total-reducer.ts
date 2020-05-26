import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'

const initialState: number = 0

export function ShoppingCartReducerTotal(state = initialState, action : Actions){
    switch(action.type){

        case ActionTypes.SHOPPINGCART_TOTAL:
            return state = action.payload

        default: 
            return state
    }
}
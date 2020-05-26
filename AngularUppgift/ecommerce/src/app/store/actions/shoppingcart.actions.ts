import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IShoppingCart } from 'src/app/models/ishoppingcart.model'

export class Add implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_ADD
    constructor(public payload: IShoppingCart) {}
}

export class Remove implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_REMOVE
    constructor(public payload: string) {}
}

export class Increment implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_INCREMENT
    constructor(public payload: IShoppingCart) {}
}

export class Decrement implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_DECREMENT
    constructor(public payload: IShoppingCart) {}
}

export class Total implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_TOTAL
    constructor(public payload: number) {}
}
export class Amount implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_AMOUNT
    constructor(public payload: number) {}
}

export type Actions = Add | Remove | Increment | Decrement | Total | Amount
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})



export class CartItemComponent implements OnInit {

  public shoppingcart: Array<IShoppingCart>
  public shoppingcartTotalPrice: number = 0 
  public shoppingcartTotalAmount: number = 0 


  constructor(private shoppingCartService: ShoppingCartService, private router: ActivatedRoute, private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.select(state => state.shoppingcart).subscribe(res => this.shoppingcart = res)

    this.store.select(state => state.shoppingcartTotalPrice).subscribe(res => this.shoppingcartTotalPrice = res) 
    this.store.select(state => state.shoppingcartTotalAmount).subscribe(res => this.shoppingcartTotalAmount = res) 
  }

  increment(item) {
    this.shoppingCartService.increment(item)
    console.log(item)
  }
  decrement(item) {
    this.shoppingCartService.decrement(item)
    console.log(item)
  }

}

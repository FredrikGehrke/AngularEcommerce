import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public shoppingcartTotalAmount: number = 0
  constructor(private shoppingCartService: ShoppingCartService,  private store: Store<IState>)  { }

  ngOnInit(): void {
    this.store.select(store => store.shoppingcartTotalAmount).subscribe(res => this.shoppingcartTotalAmount = res)
  }

}

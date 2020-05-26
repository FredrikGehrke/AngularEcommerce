import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  public product: IProduct

  constructor(private router: ActivatedRoute, private productService: ProductService, private store: Store<IState>, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productService.clear()
    this.productService.getById(this.router.snapshot.params.id)
    this.store.select(store => store.product).subscribe(res => this.product = res)
  }

  addToCart(product, quantity = 1) {
    this.shoppingCartService.add(product, quantity)
  }

  ngOnDestroy(): void {
    this.productService.clear()
  }

}




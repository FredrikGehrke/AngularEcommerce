import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'

import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductCatalogReducer } from './store/reducers/product-catalog.reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingCartReducer } from './store/reducers/shoppingcart.reducer';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { CartItemComponent } from './components/shoppingcart/cart-item/cart-item.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { ShoppingCartReducerTotal } from './store/reducers/shoppingcart-total-reducer'; // NY
import { ShoppingCartReducerAmount } from './store/reducers/shoppingcart-amount-reducer'; // NY

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogViewComponent,
    ProductViewComponent,
    ProductGridComponent,
    HomeComponent,
    CartComponent,
    CartItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      productcatalog: ProductCatalogReducer,
      product: ProductReducer,
      shoppingcart: ShoppingCartReducer,
      shoppingcartTotalPrice: ShoppingCartReducerTotal,
      shoppingcartTotalAmount: ShoppingCartReducerAmount
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

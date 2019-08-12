import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CartModel } from './models/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  cart$: Observable<CartModel>;

  constructor(private store: Store<CartModel>) {
    this.cart$ = store.pipe(select('cart'));
  }
}

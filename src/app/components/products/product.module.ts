import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { productDetailGuard } from '../../guards/product-detail.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate: [productDetailGuard],
        component: ProductDetailComponent
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }

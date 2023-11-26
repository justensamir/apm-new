import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../IProduct';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  id!: number;
  product!: IProduct;


  constructor(private route: ActivatedRoute, private router: Router, private productService:ProductService){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); 
    this.pageTitle += `: ${this.id}`;
    this.productService.getProduct(this.id).subscribe({
      next: (value) => {
        this.product = value
        console.log(value)
      },
      error: (error) => {
        console.log(error.message);
      }
    })
  }

  onBack() {
    this.router.navigate(['/products']);
  }

}

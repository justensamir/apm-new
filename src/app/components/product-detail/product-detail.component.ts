import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-list/product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  id!: number;
  product!: IProduct;


  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); 
    this.pageTitle += `: ${this.id}`;
  }

  onBack() {
    this.router.navigate(['/products']);
  }

}

import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  
  imgWidth: number = 80;
  imgHeight: number = 80;
  showImg: boolean = true;
  prodctTitle: string = 'Products List';
  filteredProductList: IProduct[] = [];
  products: IProduct[] = [];
  private _listFilter: string = '';
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private productService:ProductService){
    
  }
  
  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => { 
        this.products = products; 
        this.filteredProductList = this.products;
      },
      error: err => this.errorMessage = err,

      complete: () => console.log('Getting products completed successfully')
      
    });
    
    console.log('From OnInit Product list Component')
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  get listFilter() : string{
    return this._listFilter
  }

  set listFilter(value: string){
    this._listFilter = value
    console.log(`setted value is ${value}`)
    console.log(value.length)
    if(value.length === 0) 
      this.filteredProductList = this.products
    else 
      this.filteredProductList = this.performFilter(value)

    console.log(this.filteredProductList)
  }


  toggleImg(): void {
    this.showImg = !this.showImg;
  }

  performFilter(filterBy: string) : IProduct[] {
    let filteredBy = filterBy.toLocaleLowerCase()
    return this.products.filter((product: IProduct) => 
      product.name.toLocaleLowerCase().includes(filteredBy)
    )
  }

  onRatingClicked(message: string): void {
    this.prodctTitle = `Products List ${message}`
  }
}

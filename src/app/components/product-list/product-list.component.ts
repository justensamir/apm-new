import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  
  imgWidth: number = 80;
  imgHeight: number = 80;
  showImg: boolean = true;
  filteredProductList: IProduct[] = []
  products: IProduct[] = [
    {
      img: 'assets/images/bluebery.jpg',
      name: 'product1',
      code: 'GDN-0023-0-',
      avilable: new Date(2021,2,18),
      price: 39.5,
      rate: 5,
    },
    {
      img: 'assets/images/honey.jpg',
      name: 'product2',
      code: 'TBX-0048-1-',
      avilable: new Date(2021,2,21),
      price: 39.555,
      rate: 5,
    },
  ];
  private _listFilter: string = ''

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

  ngOnInit(): void {
    this.filteredProductList = this.products
    console.log('From OnInit Product list Component')
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
}

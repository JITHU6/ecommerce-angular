import { Component, OnInit } from '@angular/core';
import { prod, Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  // templateUrl: './product-list.component.html',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  product=prod;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listproductList();
  }

  
  listproductList(){
    // this.productService.getProductList().subscribe(
    //   data=>{
    //     this.products=data;
    //   }
    // )
    this.products=this.product;
  }

}

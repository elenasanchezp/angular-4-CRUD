import { Component, OnInit } from '@angular/core';
import { ProductService }  from './product.service';
import { Product }  from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
})
export class ProductComponent implements OnInit { 
	products: Product[];
	productForm: boolean = false; 
	isNewProductForm: boolean;
	newProduct: any = {};

	constructor(private _productService: ProductService){}

	ngOnInit() {
		this.getProducts();
	}

	getProducts(){
		//this.products = this._productService.getProductsFromService();
		this.products = this._productService.getProductsFromData();
	}

	showEditProductForm(product: Product) {
		if(!product) {
			this.productForm = false; 
			return; 
		}	
		this.productForm = true; 
		this.isNewProductForm = false;
		this.newProduct = product;  
	}

	showAddProductForm() {
		if(this.products.length) {
			this.newProduct = {}
		}
		this.productForm = true; 
		this.isNewProductForm = true;	
	}

	saveProduct(product: Product) {
		if(this.isNewProductForm) {
		 	this._productService.addProduct(product);
		} else {

		}
		this.productForm = false; 
	}
}
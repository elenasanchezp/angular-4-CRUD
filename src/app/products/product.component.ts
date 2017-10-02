import { Component, OnInit } from '@angular/core';
import { ProductService }  from './product.service';
import { Product }  from './product';
import { clone } from 'lodash';
@Component({
  selector: 'app-product',
  templateUrl: './product.html',
})
export class ProductComponent implements OnInit { 
	products: Product[];
	productForm: boolean = false; 
	editProductForm: boolean = false; 
	isNewProductForm: boolean;
	newProduct: any = {};
	editedProduct: any = {};

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

		this.editProductForm = true; 
		this.editedProduct = clone(product);  
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

	updateProduct() {
		this._productService.updateProduct(this.editedProduct);
		this.editProductForm = false; 
		this.editedProduct = {};		
	}

	removeProduct(product: Product) {
		this._productService.deleteProduct(product);
	}

	cancelUpdateProduct(){
		this.editedProduct = {};
		this.editProductForm = false; 
	}
}
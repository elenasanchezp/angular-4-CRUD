import { Injectable } from '@angular/core'; 
import { Product }  from './product';
import { PRODUCT_ITEMS } from './product-data';

@Injectable() 
export class ProductService {
	
	private pItems = PRODUCT_ITEMS; 

	getProductsFromData():  Product[] {
		return this.pItems;
	}

	addProduct(product: Product) {
		this.pItems.push(product);
	}
	/*
	getProductsFromService(): Product[] {
	return [{
		id: 1, 
		name: 'Product 1',  
		description: 'Description 1', 
		price: 4.99
	}, 
	{
		id: 2, 
		name: 'Product 2',  
		description: 'Description 2', 
		price: 10.99
	}]
	}
	*/
}
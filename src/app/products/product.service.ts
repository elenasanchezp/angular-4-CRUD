import { Injectable } from '@angular/core'; 
import { Product }  from './product';

@Injectable() 
export class ProductService {
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
}
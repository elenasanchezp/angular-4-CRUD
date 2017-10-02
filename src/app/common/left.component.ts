import { Component } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
})
export class LeftComponent  { 
	title: string = "Left Component";
	items: Array<string> = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
}
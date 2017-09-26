import { Component } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
})
export class LeftComponent  { 
	title: string = "News";
	items: Array<string> = ["Item 1", "Item 2"];
}
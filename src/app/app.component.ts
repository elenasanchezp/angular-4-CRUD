import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<app-header></app-header>
  	<div class="row">
		<div class="col-md-3">
			<app-left></app-left>
		</div>
		<div class="col-md-9">
			<app-right></app-right>
			<app-product></app-product>
		</div>
  	</div>
  	<app-footer></app-footer>
  `,
})
export class AppComponent  { name = 'Angular'; }

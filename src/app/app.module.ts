
// Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent }  from './app.component';
import { HeaderComponent }  from './common/header.component';
import { FooterComponent }  from './common/footer.component';
import { LeftComponent }  from './common/left.component';
import { RightComponent }  from './common/right.component';
import { ProductComponent }  from './products/product.component';

// Services
import { ProductService }  from './products/product.service';

@NgModule({
  imports:      [ 
  					BrowserModule, 
  					FormsModule
  				],
  declarations: [ 
  					AppComponent,
  					HeaderComponent,
  					FooterComponent,
  					LeftComponent,
  					RightComponent, 
  					ProductComponent 					
  				],
  providers: 	[ ProductService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

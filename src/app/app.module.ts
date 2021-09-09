import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { CartComponent } from './cart/cart.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [	
    AppComponent,
      MyComponentComponent,
      CartComponent,
      HelloComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

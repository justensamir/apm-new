import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces-pipe';
import { StarsComponent } from './shared/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe,
    ProductListComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

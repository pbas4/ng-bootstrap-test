import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProgressbarModule, BsDropdownModule  } from 'ngx-bootstrap';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { SearcherComponent } from './searcher/searcher.component';
import { CardsComponent } from './cards/cards.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductsComponent,
    HeaderComponent,
    SearcherComponent,
    CardsComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

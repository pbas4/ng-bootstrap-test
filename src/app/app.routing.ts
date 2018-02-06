import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { SearcherComponent } from './searcher/searcher.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'searcher', pathMatch: 'full' },
  { path: 'searcher', component: SearcherComponent },
  { path: 'search', component: SearchComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: SearchComponent }
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)


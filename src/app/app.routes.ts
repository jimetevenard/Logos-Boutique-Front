import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'app-root', pathMatch: 'full'},

    {path: 'product-details', component: ProductDetailsComponent}
];

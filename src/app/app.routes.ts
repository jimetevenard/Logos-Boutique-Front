import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { OrderStageComponent } from './order-stage/order-stage.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { PaiementComponent } from './paiement/paiement.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'order-stage', component: OrderStageComponent},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'livraison', component: LivraisonComponent},
    {path: 'paiement', component: PaiementComponent},
    {path: 'product-details/:idProduit', component: ProductDetailsComponent}
];

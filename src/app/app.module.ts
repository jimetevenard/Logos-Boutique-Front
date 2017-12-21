import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductBlockComponent } from './product-block/product-block.component';
import { ProduitService } from './service/produit.service';


import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { PanierComponent } from './panier/panier.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSuggestionComponent } from './product-suggestion/product-suggestion.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FiltreBoardComponent } from './filtre-board/filtre-board.component';
import { OrderStageComponent } from './order-stage/order-stage.component';
import { ProduitApresFiltrationService } from './service/produit-apres-filtration.service';
import { PaiementComponent } from './paiement/paiement.component';
import { PanierService } from './service/panier-service';
import { CommandeService } from './service/commande.service';
import { WindowRef } from './service/window.service';
import { ConnexionService } from './service/connexion.service';
import { PaiementService } from './service/paiement.service';
import { PremiumComponent } from './premium/premium.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductBlockComponent,
    CarouselComponent,
    FooterComponent,
    PanierComponent,
    ProductDetailsComponent,
    ProductSuggestionComponent,
    HomeComponent,
    FiltreBoardComponent,
    OrderStageComponent,
    PaiementComponent,
    PremiumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProduitService,
    ProduitApresFiltrationService,
    PanierService,
    CommandeService,
    WindowRef,
    ConnexionService,
    PaiementService],
  bootstrap: [AppComponent]
})
export class AppModule { }

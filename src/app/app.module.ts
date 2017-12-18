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
import { ProductImgsComponent } from './product-imgs/product-imgs.component';
import { ProductSuggestionComponent } from './product-suggestion/product-suggestion.component';
import { ProductCheminComponent } from './product-chemin/product-chemin.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FiltreBoardComponent } from './filtre-board/filtre-board.component';
import { OrderStageComponent } from './order-stage/order-stage.component';
import { CommandeComponent } from './commande/commande.component';
import { ProductRowComponent } from './product-row/product-row.component';

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
    ProductImgsComponent,
    ProductSuggestionComponent,
    ProductCheminComponent,
    HomeComponent,
    FiltreBoardComponent,
    OrderStageComponent,
    CommandeComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

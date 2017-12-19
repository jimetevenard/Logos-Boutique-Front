import { Component } from '@angular/core';
import { Produit } from './models/Produit.model';
import { Langue } from './models/Langue.model';
import { ImagesProduit } from './models/ImagesProduit.model';
import { ProduitService } from './service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  panierProduits: Produit[];

  
  constructor() {

    this.panierProduits = [
      new Produit(
        1,
        'livre1',
        'description',
        19.99,
        15,
        // tslint:disable-next-line:whitespace
        null,
        null,
        null,
        15.99
      )
    ];

  

  }
}

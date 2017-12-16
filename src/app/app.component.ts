import { Component } from '@angular/core';
import { Produit } from './models/Produit.model';
import { Langue } from './models/Langue.model';
import { ImagesProduit } from './models/ImagesProduit.model';

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
        15.99
      )
    ];
  }
}

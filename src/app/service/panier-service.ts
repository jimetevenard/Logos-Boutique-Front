import { Injectable } from '@angular/core';
import { Produit } from '../models/Produit.model';

@Injectable()
export class PanierService {

  panierProduit: Produit[] = [];

  constructor() {
    // ne rien faire, c'est pas mal aussi...
  }



  ajouterProduit(product: Produit) {
    this.panierProduit.push(product);
  }

  enleverProduit(product: Produit) {
    // tslint:disable-next-line:prefer-const
    let index = this.panierProduit.indexOf(product);
    this.panierProduit.splice(index);
  }
}

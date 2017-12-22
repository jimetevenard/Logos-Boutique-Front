import { Injectable } from '@angular/core';
import { Produit } from '../models/Produit.model';

@Injectable()
export class PanierService {
  premiumIsInCart: boolean = false;
  // produitAdded: boolean = false;
  panierProduit: Produit[] = [];

  constructor() {
    // ne rien faire, c'est pas mal aussi...
  }



  ajouterProduit(product: Produit) {
    if(product.premium != undefined){
      if(!this.premiumIsInCart){
        this.panierProduit.push(product);
      }
      this.premiumIsInCart = true;
      
    } else {
      this.panierProduit.push(product);
    }
    
  }

  enleverProduit(product: Produit) {
    if(product.premium != 0){
      this.premiumIsInCart = false;
    }
    let index = this.panierProduit.indexOf(product);
    this.panierProduit.splice(index);
  }
}

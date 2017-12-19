import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Produit } from '../models/Produit.model';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ProduitService {

  baseUrl: string = "http://localhost:3000/produits";
  
  constructor(private http: HttpClient) {
    console.log('CONST SERVICE');
    this.loadAllProduits();
    console.log(this.produits);
  }

  produits: Produit[] = [];

  produitSelectionne: Produit;

  getProduitSelectionne(produitSelect: Produit) {
    this.produitSelectionne = produitSelect ;
  }

  returnProduct():  Produit {
    return this.produitSelectionne;
  }

  getProduitById(id: number) {
    // Bof bof tout ça...

    // il fadrait que les id soint uniques => objet
    for (let pd of this.produits){
      if(pd.id == id){
        return pd;
      }
    }
  }

  loadAllProduits() {
      this.getObservableProduits().subscribe(
        data => this.produits = data,
        errorCode => console.log(errorCode)
      );
    }


  getObservableProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl);
  }


}

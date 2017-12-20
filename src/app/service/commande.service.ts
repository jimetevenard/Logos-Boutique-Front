import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Commande } from '../models/Commande.model';
import { LigneCommande } from '../models/LigneCommande.model';
import { Produit } from '../models/Produit.model';

@Injectable()
export class CommandeService {

  url: string = "";


  commandeEnCours: Commande;

  constructor(private http: HttpClient) {

  }

  

  initCommande(produits: Produit[]){
    this.commandeEnCours = Commande.of(produits);
  }

  postCommande() {
    this.http.post(this.url, this.commandeEnCours).subscribe(
      res => {
        console.log("goooood!!");
      },
      err => {
        console.log("not goooooood");
      }
    );
  }

}

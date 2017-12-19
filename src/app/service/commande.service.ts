import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Commande } from '../models/Commande.model';
import { LigneCommande } from '../models/LigneCommande.model';
import { Produit } from '../models/Produit.model';

@Injectable()
export class CommandeService {

  url: string = "";
  testLigneCommandes: LigneCommande[] = [
    new LigneCommande( new Produit(1, "pouet", "pouetdesc", 12.99, 3, null, null, null, 10.99), 2),
    new LigneCommande( new Produit(2, "pouet2", "pouetdesc2", 12.99, 3, null, null, null, 10.99), 2)
  ];
  testCommande: Commande = new Commande( this.testLigneCommandes, "3 rue des trou du cul");

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

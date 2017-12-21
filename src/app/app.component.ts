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

  public static urlProduits: string = "http://192.168.102.145:8080/boutique_service/logos/produit";
  public static urlPaiement: string = "http://192.168.102.145:8080/boutique_service/logos/commande";

  public static urlConnexion: string = "http://mylogos.top/rest/login";


  constructor() {
  }
}

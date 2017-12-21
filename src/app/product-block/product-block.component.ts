import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProduitService } from '../service/produit.service';
import { Route } from '@angular/router/src/config';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.css']
})
export class ProductBlockComponent implements OnInit {

  @Input()
  produit: Produit;

  @Input()
  appRootRouter: Router;

  constructor(
    private serviceProduit: ProduitService,
    private connexionService: ConnexionService) { }

  checkImgProd(): string {

    if (this.produit.listeImagesProduit.length > 0) {
      return this.produit.listeImagesProduit[0].urlImage;
    } else {
      return '';
    }

  }

  afficherPrix(): number {
    if (this.connexionService.isLoggedIn() && this.connexionService.infoUtilisateur.premium) {
      return this.produit.prixPremium;
    } else {
      return this.produit.prix;
    }
  }

  ngOnInit() {
  }

}

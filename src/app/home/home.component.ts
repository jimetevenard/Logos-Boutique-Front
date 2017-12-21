import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { Langue } from '../models/Langue.model';
import { ImagesProduit } from '../models/ImagesProduit.model';
import { ProduitService } from '../service/produit.service';
import { Router } from '@angular/router';
import { ProduitApresFiltrationService } from '../service/produit-apres-filtration.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  listeProduitSelected: Produit[];


  @Input()
  appRootRouter: Router;

  panierProduits: Produit[];

  @Input()
  produits: Produit[] = [];


  getAllProduits() {
    this.produitService.getObservableProduits().subscribe(
      data => this.produits = data,
      errorCode => console.log(errorCode),
      () => this.produitApresFiltrationService.produitsApresFiltration = this.produits
    );
  }



  constructor(private produitService: ProduitService,
    private produitApresFiltrationService: ProduitApresFiltrationService) {
    this.getAllProduits();
  }

  ngOnInit() {
  }
}



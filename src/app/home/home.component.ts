import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { Langue } from '../models/Langue.model';
import { ImagesProduit } from '../models/ImagesProduit.model';
import { ProduitService } from '../service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit() {
  }

  @Input()
  appRootRouter: Router;

  panierProduits: Produit[];

  @Input()
  produits: Produit[] = [];


  constructor(private produitService: ProduitService) {
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



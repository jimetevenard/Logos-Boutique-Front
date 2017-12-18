import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { Langue } from '../models/Langue.model';
import { ImagesProduit } from '../models/ImagesProduit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit() {
  }

  panierProduits: Produit[];

  produits: Produit[] = [];

  getAllProduits() {
    this.produitService.getAllProduits().subscribe(
      data => this.produits = data,
      errorCode => console.log(errorCode)
    );
  }

  constructor(private produitService: ProduitService) {
    this.getAllProduits();
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



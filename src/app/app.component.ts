import { Component } from '@angular/core';
import { Produit } from './models/Produit.model';
import { ProduitService } from './service/produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) { 
    this.getAllProduits();
  }

  getAllProduits(){
    this.produitService.getAllProduits().subscribe(
      data => this.produits = data,
      errorCode => console.log(errorCode)
    );
  }
}

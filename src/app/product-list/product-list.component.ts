import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { Router } from '@angular/router';
import { ProduitService } from '../service/produit.service';
import { ProduitApresFiltrationService } from '../service/produit-apres-filtration.service';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  @Input()
  appRootRouter: Router;
  @Input()
  listeProduit: Produit[];

  @Output()
  onProduitSelected: EventEmitter<Produit>;

  private produitCourant: Produit;

  clicked(produit: Produit): void {
    this.produitCourant = produit,
      this.onProduitSelected.emit(produit);
  }

  constructor(private produitService: ProduitService,
              private produitApresFiltrationService: 
              ProduitApresFiltrationService) {
    this.onProduitSelected = new EventEmitter();
    
  }
  ngOnInit() {
    
  }

}

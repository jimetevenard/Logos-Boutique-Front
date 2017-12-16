import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../models/Produit.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  listeProduit: Produit[];

  @Output()
  onProduitSelected: EventEmitter<Produit>;

  private produitCourant: Produit;

  clicked(produit: Produit): void {
    this.produitCourant = produit,
      this.onProduitSelected.emit(produit);
  }

  constructor() {
    this.onProduitSelected = new EventEmitter();
  }
  ngOnInit() {
  }

}

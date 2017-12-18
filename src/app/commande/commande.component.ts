import { Component, OnInit, Input, Output } from '@angular/core';
import { Produit } from '../models/Produit.model';

@Component({
  selector: 'commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  @Input()
  panierProduits: Produit[];
  

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
@Input()
panierProduits;
  constructor() { }

  ngOnInit() {
  }

}

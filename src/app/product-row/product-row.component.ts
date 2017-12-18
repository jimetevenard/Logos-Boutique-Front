import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input()
  produit: Produit

  constructor() { }

  ngOnInit() {
  }

}

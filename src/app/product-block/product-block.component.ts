import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';

@Component({
  selector: 'product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.css']
})
export class ProductBlockComponent implements OnInit {

  @Input()
  produit: Produit;
  
  constructor() { }

  ngOnInit() {
  }

}

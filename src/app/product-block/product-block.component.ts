import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { Router } from '@angular/router';

@Component({
  selector: 'product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.css']
})
export class ProductBlockComponent implements OnInit {

  @Input()
  produit: Produit;

  @Input()
  appRootRouter: Router;
  
  constructor() { }

  ngOnInit() {
  }

  // clicked(product: Produit): void {
  //   console.log(product);
  //   this.appRootRouter.navigate(['/product-details', this.produit]);
  // }

}

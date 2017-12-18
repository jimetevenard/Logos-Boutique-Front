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
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickProduit(product: Produit): void {
    console.log('C\'est l\'heure du Kebab !');
    console.log(product);
    this.router.navigate(['/product-details', this.produit]);
  }

}

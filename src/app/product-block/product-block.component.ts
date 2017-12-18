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
  
  constructor( private router: Router) { }

  ngOnInit() {
  }

  clicked(product: Produit): void {
    this.router.navigate(['product-details', this.produit]);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProduitService } from '../service/produit.service';
import { Route } from '@angular/router/src/config';

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
  
  constructor( private serviceProduit: ProduitService) { }

  ngOnInit() {
  }

}

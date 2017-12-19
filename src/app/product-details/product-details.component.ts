import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { ProduitService } from '../service/produit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  produit: Produit;


  constructor(private route: ActivatedRoute, private serviceProduit: ProduitService ) {

  }

  ngOnInit() {
    let idProduit = this.route.snapshot.paramMap.get('idProduit');
    console.log(idProduit);
    this.produit = this.serviceProduit.getProduitById(idProduit);
    console.log(this.produit);

  }

}

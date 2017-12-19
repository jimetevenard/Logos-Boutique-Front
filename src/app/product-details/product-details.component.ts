import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { ProduitService } from '../service/produit.service';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../service/panier-service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  produit: Produit;


  constructor(private route: ActivatedRoute, private serviceProduit: ProduitService,
  private panierService: PanierService ) {

  }

  ngOnInit() {
    let idProduit: number = parseInt( this.route.snapshot.paramMap.get('idProduit') );
    this.produit = this.serviceProduit.getProduitById(idProduit);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { ProduitService } from '../service/produit.service';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../service/panier-service';
import { CommandeService } from '../service/commande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  produit: Produit;
  panierVisited: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceProduit: ProduitService,
    private panierService: PanierService,
    private commandeService: CommandeService) {

  }

  ngOnInit() {
    let idProduit: number = parseInt(this.route.snapshot.paramMap.get('idProduit'));
    this.produit = this.serviceProduit.getProduitById(idProduit);
  }

  showPanier() {
    this.commandeService.initCommande(this.panierService.panierProduit);
    this.router.navigate(['/order-stage']);
    this.panierService.produitAdded = false;
    this.panierVisited = true:
  }

}

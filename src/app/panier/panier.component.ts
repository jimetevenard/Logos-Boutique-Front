import { Component, OnInit,Input } from '@angular/core';
import { PanierService } from '../service/panier-service';
import { CommandeService } from '../service/commande.service';
import { Router } from '@angular/router';
import { WindowRef } from '../service/window.service';

@Component({
  selector: 'panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(
    private router: Router,
    private panierService: PanierService,
    private commandeService: CommandeService,
    private window: WindowRef) { }

  ngOnInit() {
  }

  validerPanier(){
    this.window.nativeWindow.$('#myModal').modal('hide');
    this.commandeService.initCommande(this.panierService.panierProduit);
    this.router.navigate(['/order-stage']);

  }

}

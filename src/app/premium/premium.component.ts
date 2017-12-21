import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { PanierService } from '../service/panier-service';
import { InfoUtilisateur } from '../models/InfoUtilisateur.model';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  infosUserLocal: InfoUtilisateur;
  login: string;
  password: string;

  constructor(
    private serviceProduit: ProduitService,
    private connexionService: ConnexionService,
    private panierService: PanierService ) { }

  ngOnInit() {
  }

  connexion() {
    this.connexionService.validerConnexion(this.login, this.password).subscribe(
      resp => this.infosUserLocal = resp,
      er => console.error('Erreur connexion!'),
      () => {
        if (this.infosUserLocal.ok) {
          
        } else {
          console.log("pas connecté");
        }
      }
    );
  }

}

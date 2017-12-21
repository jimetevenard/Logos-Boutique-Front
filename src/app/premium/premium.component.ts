import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { PanierService } from '../service/panier-service';
import { InfoUtilisateur } from '../models/InfoUtilisateur.model';
import { ConnexionService } from '../service/connexion.service';
import { Produit } from '../models/Produit.model';
import { Utilisateur } from '../models/Utilisateur.model';

@Component({
  selector: 'premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  

  infosUserLocal: InfoUtilisateur;
  login: string;
  password: string;
  erreurLogin: boolean;

  

  logToiStp: boolean = false;

  produitPremium: Produit;

  constructor(
    private serviceProduit: ProduitService,
    private connexionService: ConnexionService,
    private panierService: PanierService ) { 

      const prixDuPremium: number = 15.99;
      this.produitPremium = new Produit(
        "Abonnement premium",
        "premium logos",
        prixDuPremium,
        999999,
        [],null,null,
        prixDuPremium);
    }

  ngOnInit() {
  }

  premiumToCartCommand(){
    if(this.connexionService.isLoggedIn() && this.connexionService.infoUtilisateur.eleve == true){
      this.premiumToCartAction(this.connexionService.infoUtilisateur.utilisateur);
    } else {
      this.logToiStp = true;
    }
  }

  premiumToCartAction(utilisateur: Utilisateur){
    this.produitPremium.premium = utilisateur.idUtilisateur;
    this.panierService.ajouterProduit(this.produitPremium);
  }

  connexion() {
    this.connexionService.validerConnexion(this.login, this.password).subscribe(
      resp => this.infosUserLocal = resp,
      er => console.error('Erreur connexion!'),
      () => {
        if (this.infosUserLocal.ok) {
          this.erreurLogin = false;

          this.premiumToCartAction(this.infosUserLocal.utilisateur);
        } else {
          this.erreurLogin = true;
          console.log("pas connecté");
        }
      }
    );
  }

  

}

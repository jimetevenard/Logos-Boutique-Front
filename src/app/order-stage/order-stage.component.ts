import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from '../service/panier-service';
import { CommandeService } from '../service/commande.service';
import { WindowRef } from '../service/window.service';
import { ConnexionService } from '../service/connexion.service';
import { InfoUtilisateur } from '../models/InfoUtilisateur.model';
import { Commande } from '../models/Commande.model';
import { Informations } from '../models/Informations.model';
import { InformationBancaire } from '../models/InformationBancaire.model';
import { PaiementService } from '../service/paiement.service';
import { Produit } from '../models/Produit.model';

@Component({
  selector: 'order-stage',
  templateUrl: './order-stage.component.html',
  styleUrls: ['./order-stage.component.css']
})
export class OrderStageComponent implements OnInit {

  adresse: string;
  login: string;
  password: string;
  numCB: number;
  cvv: number;
  moisExp: number;
  anneeExp: number;
  nomPorteur: string;
  infosUserLocal: InfoUtilisateur;
  reponsePaiement: any;
  paiementValide: boolean;

  constructor(
    private panierService: PanierService,
    private commandeService: CommandeService,
    private winRef: WindowRef,
    private connexionService: ConnexionService,
    private paiementService: PaiementService
  ) { }

  ngOnInit() {
    console.log("dans OrderStageComponent");
    console.log(this.commandeService);
  }

  jumpToStep(step: string) {
    let win = this.winRef.nativeWindow;
    win.$('#order-stage-tabs .nav-pills li').removeClass('active');
    win.$('#order-stage-tabs .tab-pane').removeClass('in active');

    win.$('#order-stage-tabs .nav-pills li[data-step="' + step + '"]').addClass('active');
    win.$('#order-stage-tabs .tab-pane[data-step="' + step + '"]').addClass('in active');
  }

  connexion(login: string, password: string) {
    this.connexionService.validerConnexion(login, password).subscribe(
      resp => this.infosUserLocal = resp,
      er => console.error('Erreur connexion!'),
      () => {
        if (this.infosUserLocal.ok) {
          let win = this.winRef.nativeWindow;
          win.$('li[data-step="connexion"]').addClass('disabled');
          win.$('li[data-step="connexion"] a').removeData('toggle');
          win.$('li[data-step="connexion"] a').removeAttr('href');

          this.jumpToStep('livraison');
        } else {
          console.log("pas connecté");
        }
      }
    );
  }

  livraison(adresse: string) {
    if (adresse) {
      this.commandeService.commandeEnCours.adresse = adresse;
      this.jumpToStep('paiement');
    }
  }

  demandePaiement(numbCB: number, cvv: number, moisExp: number, anneeExp: number, nomPorteur: string) {
    let commande: Commande = this.commandeService.commandeEnCours;
    let infoBancaire: InformationBancaire = new InformationBancaire(commande.prixTotal(), numbCB, cvv, moisExp, anneeExp, nomPorteur);

    this.paiementService.validerPaiement(infoBancaire, commande, this.connexionService.infoUtilisateur.utilisateur).subscribe(
      resp => this.reponsePaiement = resp,
      er => console.error('erreur demande paiement!'),
      () => {
        console.log(this.reponsePaiement);
        if (this.reponsePaiement == '123456789') {
          this.paiementValide = true;
        } else {
          this.paiementValide = false;
        }
        this.jumpToStep('recap');

      }
    )
  }

  stepAfterRecap(): string {
    if (this.connexionService.isLoggedIn()) {
      return 'livraison';
    } else {
      return 'connexion';
    }
  }

  typeInput(produit: Produit): string {
    if (produit.premium > 0) {
      return 'hidden';
    } else {
      return 'number';
    }
  }
}

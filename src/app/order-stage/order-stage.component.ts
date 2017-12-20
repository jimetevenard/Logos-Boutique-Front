import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from '../service/panier-service';
import { CommandeService } from '../service/commande.service';
import { WindowRef } from '../service/window.service';
import { ConnexionService } from '../service/connexion.service';
import { InfoUtilisateur } from '../models/InfoUtilisateur.model';

@Component({
  selector: 'order-stage',
  templateUrl: './order-stage.component.html',
  styleUrls: ['./order-stage.component.css']
})
export class OrderStageComponent implements OnInit {

  adresse: string;
  login: string;
  password: string;


  constructor(
    private panierService: PanierService,
    private commandeService: CommandeService,
    private winRef: WindowRef,
    private connexionService: ConnexionService
  ) { }

  ngOnInit() {
    console.log("dans OrderStageComponent");
    console.log(this.commandeService);
  }

  jumpToStep(step: string){
    let win = this.winRef.nativeWindow;
    win.$('#order-stage-tabs .nav-pills li').removeClass('active');
    win.$('#order-stage-tabs .tab-pane').removeClass('in active');

    win.$('#order-stage-tabs .nav-pills li[data-step="'+step+'"]').addClass('active');
    win.$('#order-stage-tabs .tab-pane[data-step="'+step+'"]').addClass('in active');
  }

  connexion(login: string, password: string){

    let infosUserLocal: InfoUtilisateur;

    this.connexionService.validerConnexion(login, password).subscribe(
        resp => infosUserLocal = resp,
        er => console.error('Erreur !'),
        () => {
          if(infosUserLocal.ok){
            this.jumpToStep('livraison');
          }else{
            console.log("pas connecté");
          }
        }
    );
    
  }

  livraison(adresse: string){
    if(adresse){
      this.commandeService.commandeEnCours.adresse = adresse;
      this.jumpToStep('paiement');
    }
  }

  demandePaiement(){
    
  }

}

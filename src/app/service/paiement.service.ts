import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Informations } from '../models/Informations.model';
import { InformationBancaire } from '../models/InformationBancaire.model';
import { Commande } from '../models/Commande.model';
import { Utilisateur } from '../models/Utilisateur.model';

@Injectable()
export class PaiementService {

  url = "http://localhost:8180/boutique_service/logos/information";
  validate: boolean;


  constructor(private http: HttpClient) { }

  validerPaiement(infoPaiement: InformationBancaire, cmd: Commande, user: Utilisateur): Observable<boolean> {
    let demandeBody = {
      "informationPaiement": infoPaiement,
      "commande": cmd,
      "utilisateur": user
    }
    console.log(demandeBody);
    let observable = this.http.post<boolean>(this.url, demandeBody);

    observable.subscribe(
      res => {
        this.validate = res;
      },
      er => { }
    );

    return observable;
  }

}

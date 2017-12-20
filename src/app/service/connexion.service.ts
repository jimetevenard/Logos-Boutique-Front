import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Utilisateur } from '../models/Utilisateur.model';
import { InfoUtilisateur } from '../models/InfoUtilisateur.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConnexionService {
 // url = "http://localhost:8180/Logos_Front/rest/login";
  url = "http://mylogos.top/rest/login";


  infoUtilisateur: InfoUtilisateur; //TODO modele

  constructor(private http: HttpClient) { }

  validerConnexion(login: string, password: string): Observable<InfoUtilisateur> {

    let connexionBody = {
      "login": login,
      "password": password
    };

     let observable = this.http.post<InfoUtilisateur>(this.url, connexionBody);
     observable.subscribe(
        res => {
            this.infoUtilisateur = res;
          },
        err => {
    
          }    
     );
     return observable;
  }
    
    

  


}

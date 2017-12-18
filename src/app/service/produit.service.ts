import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Produit } from '../models/Produit.model';

@Injectable()
export class ProduitService {

  baseUrl: string = "http://localhost:3000/produits"
  constructor(private http: HttpClient) { }

  getAllProduits(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.baseUrl);
  }

  
}

import { Injectable } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { ProduitService } from './produit.service';

@Injectable()
export class ProduitApresFiltrationService {

  constructor(private produitService: ProduitService) { }

  produitsApresFiltration: Produit[] = this.produitService.produits;
}

import { Produit } from "./Produit.model";

export class LigneCommande {
    public id: number;
    
    constructor(
        public produit: Produit,
        public quantite: number
    ) { }
}
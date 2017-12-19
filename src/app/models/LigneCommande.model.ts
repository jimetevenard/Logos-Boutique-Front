import { Produit } from "./Produit.model";

export class LigneCommande {
    constructor(
        public id: number,
        public produit: Produit,
        public quantite: number
    ) { }
}
import { LigneCommande } from './LigneCommande.model';

export class Commande {
    constructor(
        public id: number,
        public ligneCommande: LigneCommande[],
        public adresse: string
    ) { }
}
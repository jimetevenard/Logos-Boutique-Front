import { LigneCommande } from './LigneCommande.model';
import { Produit } from './Produit.model';

export class Commande {
    
    public id: number;
    
    static newEmptyInstance(){
        return new this([],null);
    }

    static of(produits: Produit[]){
        let cmd = new this([], null);
        for(let produit of produits){
            cmd.ligneCommande.push(new LigneCommande(produit,1));
        }
        return cmd;
    }

    constructor(
        public ligneCommande: LigneCommande[],
        public adresse: string
    ) { }

    prixTotal(){
        let tot: number = 0;
        for(let lc of this.ligneCommande){
            tot += lc.prixTotal();
        }
        return tot;
    }
}
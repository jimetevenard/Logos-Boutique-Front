import { ImagesProduit } from "./imagesProduit.model";
import { Langue } from "./langue.model";
import { Categorie } from "./Categorie.model";



export class Produit {
  
    public id: number;
    public premium: number;

    constructor(
        public nom: string,
        public description: string,
        public prix: number,
        public quantite: number,
        public listeImagesProduit: ImagesProduit[],
        public langue: Langue,
        public categorie: Categorie,
        public prixPremium: number
    ){}
}
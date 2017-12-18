import { ImagesProduit } from "./imagesProduit.model";
import { Langue } from "./langue.model";
import { Categorie } from "./Categorie.model";



export class Produit {
  
    constructor(
        public id: number,
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
import { ImagesProduit } from "./imagesProduit.model";
import { Langue } from "./langue.model";



export class Produit {
  
    constructor(
        public id: number,
        public nom: string,
        public description: string,
        public prix: number,
        public quantite: number,
        public listeImagesProduit: ImagesProduit[],
        public langue: Langue,
        public prixPremium: number


    ){}
}
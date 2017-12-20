import { InformationBancaire } from "./InformationBancaire.model";
import { Commande } from "./Commande.model";
import { Utilisateur } from "./Utilisateur.model";

export class Informations {

    constructor(
        public informationBancaire: InformationBancaire,
        public commande: Commande,
        public utilisateur: Utilisateur
    ) { }
}
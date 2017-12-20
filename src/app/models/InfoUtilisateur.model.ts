import { Utilisateur } from "./Utilisateur.model";

export class InfoUtilisateur{

    constructor(
        public ok: boolean,
        public token: string,
        public utilisateur: Utilisateur,
        public eleve: boolean,
        public premium: boolean
    ){}
}
export class Utilisateur{
    public id: number; // backboutique (???)
    public idUtilisateur: number; // logos

    constructor(
        public nom: string,
        public prenom: string,
        public email: string
    ){}
}
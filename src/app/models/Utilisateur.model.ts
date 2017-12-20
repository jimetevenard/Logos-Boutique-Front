export class Utilisateur{
    public id: number;

    constructor(
        public nom: string,
        public prenom: string,
        public email: string
    ){}
}
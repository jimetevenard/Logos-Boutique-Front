export class InformationBancaire {

    public cleClient: string;
    public montant: number;
    constructor(
        public numeroCarte: string,
        public cvv: string,
        public moisExpiration: number,
        public anneeExpiration: number,
        public nomPorteur: string
    ) {
    }
}
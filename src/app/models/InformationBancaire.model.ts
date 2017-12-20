export class InformationBancaire {


    public cleClient: string;
    constructor(
        public montant: number,
        public numeroCarte: number,
        public cvv: number,
        public moisExpiration: number,
        public anneeExpiration: number,
        public nomPorteur: string
    ) {
    }
}
export class Wydatek 
export const KATEGORIE = [ 'Tankowanie', 'Myjnia', 'Serwis', 'Inne' ];
{
    constructor
      (
        public kategoria: string,
        public kwota: number,
        public opis: string,
        public data: Date
      ) 
    {

    }
}
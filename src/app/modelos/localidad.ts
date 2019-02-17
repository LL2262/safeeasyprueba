import { Provincia } from './provincia';

export class Localidad{

    constructor(
        public LocalidadID: number,
        public nombre: string,
        public provicnia: Provincia
    )
    {}
}
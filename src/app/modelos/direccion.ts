import { Localidad } from './localidad';

export class Direccion{

    constructor(
        public DomicilioId: number,
        public calle: string,
        public numero: string,
        public dpto: string,
        public piso: string,
        public Localidad: Localidad
    )
    {}
}
import { Rol } from './rol';
import { Persona } from './persona';

export class Usuario{
    
    constructor(
        public UsuarioID: number,
        public rol: Rol,
        public persona: Persona,
        public email: string,
        public password: string,
        public condicion: boolean
    )
    {}
}
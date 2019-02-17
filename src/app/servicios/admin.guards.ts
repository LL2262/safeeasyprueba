import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable()
export class adminGuard implements CanActivate{

    constructor(private _router: Router, private _userService: UsuarioService){
    }

    canActivate(){
        let identity = this._userService.getIdentity();

        if(identity && identity.rol.nombre == 'SUPERADMIN'){
            return true;
        }else{
            this._router.navigate(['/admin-panel']);
            return false;
        }
    }
}

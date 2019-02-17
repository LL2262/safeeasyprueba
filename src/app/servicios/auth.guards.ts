import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable()
export class authGuard implements CanActivate{

    constructor(private _router: Router, private _userService: UsuarioService){
    }

    canActivate(){
        let identity = this._userService.getIdentity();

        if(identity){
            return true;
        }else{
            this._router.navigate(['/login']);
            return false;
        }
    }
}

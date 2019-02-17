import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';

@Injectable()
export class UsuarioService{
    public url: string;
    public identity;
    public token;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    registro(usuarioRegistro){

        let params =JSON.stringify(usuarioRegistro);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'registro', params, {headers:headers}).map(res => res.json());
    }

    login(usuarioLogin){
        
        let params =JSON.stringify(usuarioLogin);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'usuarios/login', params, {headers:headers}).map(res => res.json());
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;

    }

    getToken(){
        let token = localStorage.getItem('token');

        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }

        return this.token;
    }

    usuarioUpdate(usuarioUpdate){
        let params =JSON.stringify(usuarioUpdate);
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization': this.getToken()
        });

        return this._http.put(this.url+'update-user/'+usuarioUpdate._id, params, {headers:headers}).map(res => res.json());
    }
}
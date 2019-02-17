import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { GLOBAL } from '../../servicios/global';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  providers: [UsuarioService]
})
export class PanelComponent implements OnInit {

  public titulo: string;
  public identity;
  public url: string;

  constructor(private _UsuarioService: UsuarioService, private _router : Router){

    this.url = GLOBAL.url;

   }

  ngOnInit(){
    this.identity = this._UsuarioService.getIdentity();
  }

  ngDoCheck(){
    this.identity = this._UsuarioService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
  }

}

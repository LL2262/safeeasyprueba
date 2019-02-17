import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Usuario } from '../../../modelos/usuario';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  public titulo: string;
  public usuario: Usuario;
  public status: number;
  public identity;
  public token;

  constructor(private _route: ActivatedRoute, private _router: Router, private _UsuarioService: UsuarioService) {

    this.titulo = 'Login';
    this.usuario = new Usuario(0, null, null, '', '', false);

  }

  ngOnInit() {
  }

  onSubmit() {
    //Loguearse y conseguir datos de usuario y token
    this._UsuarioService.login(this.usuario).subscribe(
      response => {
        this.identity = response.user;
        this.token = response.token;
        if (!this.identity || this.token.length <= 0) {
          console.log('El usuario no se ha logueado correctamente');
        } else {
          this.identity.password_hash = '';
          this.identity.password_salt = '';
          //Persistencia de usuario en localStorage
          localStorage.setItem('identity', JSON.stringify(this.identity));
          //Persistencia de token en localStorage
          localStorage.setItem('token', this.token);
          this.status = 202;
          this._router.navigate(['/admin-panel']);
        }
      },
      error => {
        console.log(<any>error);
        this.status = 404;
      }
    );
  }

}
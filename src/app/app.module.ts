import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Guards
import { authGuard } from './servicios/auth.guards';

// Servicios
import { UsuarioService } from './servicios/usuario.service';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PanelComponent } from './componentes/panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders, authGuard, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

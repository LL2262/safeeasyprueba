import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { PanelComponent } from './componentes/panel/panel.component';

//Guards
import { authGuard } from './servicios/auth.guards';

const appRoutes: Routes = [
     {path: '', component: LoginComponent},
     {path: 'admin-panel', component: PanelComponent, canActivate: [authGuard]},
     {path: '**', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
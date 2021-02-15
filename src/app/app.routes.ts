import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { EnderecoComponent } from './institucional/endereco/endereco.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';

export const rootRouterConfig : Routes = [
    {path: '' , redirectTo:'/home', pathMatch: 'full'},
    {path: 'home' , component: HomeComponent},
    {path: 'contato' , component: ContatoComponent},
    {path: 'sobre' , component: SobreComponent},
    {path: 'endereco', component: EnderecoComponent},
    {path: 'login', component: LoginComponent}
];
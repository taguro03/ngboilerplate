import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },
    {
        path: 'main',
        component: MainComponent,
        children: [{path:'', loadChildren: ()=>import("./main/main.routes").then(m=>m.MainRouterModule)} ]
    }
];

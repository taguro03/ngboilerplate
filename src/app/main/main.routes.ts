import { RouterLink, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { WelcomeComponent } from "../components/welcome/welcome.component";
import { SettingsComponent } from "../components/settings/settings.component";
import { ProfileComponent } from "../components/profile/profile.component";
import { NgModule } from "@angular/core";
import { LogoutComponent } from "../components/logout/logout.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'logout', component: LogoutComponent },
];



@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule]
})
export class MainRouterModule { }
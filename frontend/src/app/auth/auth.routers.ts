import { Routes } from "@angular/router"
import { SiginupComponent } from "./siginup.component"
import { SiginComponent } from "./sigincomponent"
import { LogoutComponent } from "./logout.component"

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', 'title': 'Autenticação | Signup', component: SiginupComponent },
    { path: 'signin', 'title': 'Autenticação | Signin', component: SiginComponent },
    { path: 'logout', 'title': 'Autenticação | Logout', component: LogoutComponent }
    
];
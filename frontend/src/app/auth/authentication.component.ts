import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component ({
    selector: 'app-authentication',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    template: `
            <h1>Comonente de Autenticação</h1>
            <header class="row spacing">
                <nav class="col-md-8 col-md-offset-2">
                     <ul class="nav nav-tabs">
                        <li><a class="nav-link"
                            routerLinkActive="active" [routerLink]="['signup']">Signup</a></li>
                        <li><a class="nav-link"
                            routerLinkActive="active" [routerLink]="['signin']">SignIn</a></li>
                         <li><a class="nav-link"
                            routerLinkActive="active" [routerLink]="['logout']">Logout</a></li>
                    </ul>   
                </nav>
            </header>

            <router-outlet></router-outlet>
    `
})

export class AuthenticationComponent{
    
}
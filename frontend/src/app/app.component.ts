import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';

import { MessagesComponent } from "./message/message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  HeaderComponent, 
           ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido: era "styleUrl"
})
export class AppComponent {

}

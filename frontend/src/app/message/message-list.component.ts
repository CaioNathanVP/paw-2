import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { MessageComponentSignal } from './message-signal.components';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [
    FormsModule, CommonModule,
    MessageComponentSignal
  ],
  template: `
    <div class="col-md-8 col-md-offset-2">
      @for (msg of messageS; track $index) {
        <app-message-signal [messageVarClasse]="msg"
                            (outputMessage)="msg.content = $event">
        </app-message-signal>
      }
      @empty {
        mensagens é uma lista vazia
      }
    </div>
  `,
 // providers: [MessageService]
})

export class MessageListComponent implements OnInit {
 
     messageS: Message[] =[ new Message("Texto 01 da Mensagem - LIST-Comp", "ViniciusRosalen"),
                            new Message("Texto 02 da Mensagem - LIST-Comp", "RosalenSilva"),
                            new Message("Texto 03 da Mensagem - LIST-Comp", "SilvaVinicius")
                           ];
    
    constructor (private messageService: MessageService) {}

    ngOnInit(): void {
      this.messageS = this.messageService.getMessage();
    }
}

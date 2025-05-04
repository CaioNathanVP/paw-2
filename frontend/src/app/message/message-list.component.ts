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
 
     messageS: Message[] =[];
    
    constructor (private messageService: MessageService) {}

    ngOnInit(): void {
      this.messageService.getMessage().subscribe({
        next: (dadosSucesso: any) => {
          console.log(dadosSucesso.myMsgSucesso);
          console.log({content: dadosSucesso.objSMessageSRecuperadoS[0].content});
          console.log({id: dadosSucesso.objSMessageSRecuperadoS[0].messageId});

          this.messageS = dadosSucesso.objSMessageSRecuperadoS;
        },
        error: (dadosErro) => {
          console.log(`$== !!Error (subscribe): - ${dadosErro.info_extra} ==`);
          console.log(dadosErro);
          }
      })
    }
}

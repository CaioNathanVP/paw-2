import { FormsModule, NgForm } from '@angular/forms';
import { Component , inject} from '@angular/core';

import { MessageService } from './message.service';

import { Message } from './message.model';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
  styles: `input.ng-invalid.ng-touched { border: 1px solid red;}`
  
})
export class MessageInputComponent {

  private messageService = inject(MessageService);

  onSubmit(form: NgForm){
    console.log("MessagemInputComponent: ");
    console.log(form);
    const messageAux = new Message(form.value.myContentngForm, '6653ac7e1fb1d73a38d6a1b2');
    
    
    this.messageService.addMessage(messageAux)
      .subscribe({
        next: (dadosSucesso: any) => {
          console.log(dadosSucesso.myMsgSucesso);
          console.log({content: dadosSucesso.objMessageSave.content});
          console.log({_id: dadosSucesso.objMessageSave._id});
        },
        error: (dadosErro) => {
          console.log(`$== !!Erro (subscribe): - ${dadosErro.info_extra} == `);
          console.log(dadosErro);
        }
      })
      
    
    form.resetForm();
  }
/*
  onSave(textoConsole: string){
    console.log(textoConsole);
  }

/*  onSave(textoConsole: string){
      const messageAux = new Message(textoConsole, 'Vini')  
      this.messageService.addMessage(messageAux);
      console.log(textoConsole);
  
  }*/
/*
  onEdit() {
    // Lógica para editar a mensagem
    alert('Função de edição acionada!');
  }*/
}

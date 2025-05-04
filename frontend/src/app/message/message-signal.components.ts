import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Component, EventEmitter, input, Output } from '@angular/core';
import { Message}  from './message.model'
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-signal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './message-signal.components.html',
  styleUrls: ['./message.component.css'] 
})
export class MessageComponentSignal {

  color = 'yellow';
  messageVarClasse = input<Message>(new Message("",""));

  @Output() outputMessage = new EventEmitter<string>();

  constructor(private messageServiceObj: MessageService){}
  
  onEdit(){
    this.outputMessage.emit("Texto signal");
  }

  onDelete(){
      this.messageServiceObj.deleteMesage(this.messageVarClasse());
  }

}
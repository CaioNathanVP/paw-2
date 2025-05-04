// ✅ CORRIGIDO - message.model.ts
export class Message {
  content: string;
  user: string;

  constructor(content: string, user: string) {
    this.content = content;
    this.user = user;
  }
}


/*export class Message{
    messageId: string;
    content: string;
    userId: string;
    username: string;

    constructor(messageId: string, content: string, userId: string, username: string){
        this.messageId = messageId;
        this.content = content;
        this.userId = userId;
        this.username = username;
    }
}*/
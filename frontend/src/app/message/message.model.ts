// // ✅ CORRIGIDO - message.model.ts
// export class Message {
//   content: string;
//   user: string;

//   constructor(content: string, user: string) {
//     this.content = content;
//     this.user = user;
//   }
// }


export class Message {
  content: string;
  username: string;
  messageId?: string;
  userId?: string;

  constructor(content: string, username: string, messageId?: string) {
    this.content = content;
    this.username = username;
    this.messageId = messageId;
  }
}
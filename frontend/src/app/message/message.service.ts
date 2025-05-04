import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";

import { Message } from './message.model';

@Injectable()
export class MessageService {

    private baseUrl = "http://localhost:3000";

    private messageService: Message[] = [];
    private messageSService: Message[] = [];

    //constructor(private http: HttpClient) {}

    private http = inject(HttpClient);

    addMessage(message: Message): Observable<any> {
        this.messageService.push(message);
        console.log(this.messageService);
        console.log("📦 Enviando para o backend:", message);

        return this.http.post<any>(`${this.baseUrl}/message`, message).pipe(
            catchError((e) => this.errorHandler(e, "addMessage()"))
        );
    }


    errorHandler(e: any, info: string): Observable<any> {
        throw ({
            info_extra: info,
            error_SS: e,
            error_CS: "Client-Side: errorHandler : Ocorreu um erro!"
        })
    }

    deleteMesage(message: Message) {
        this.messageService.splice(this.messageService.indexOf(message), 1);
    }

    getMessage() {
        return this.http.get<any>(`${this.baseUrl}/message`).pipe(
            map((responseRecebida: any) => {
                console.log(responseRecebida);
                console.log({ content: responseRecebida.objSMessageSRecuperadoS[0].content });
                console.log({ _id: responseRecebida.objSMessageSRecuperadoS[0]._id });

                const messageSResponseRecebida = responseRecebida.objSMessageSRecuperadoS;

                let transfomedCastMessagesModelFrontend: Message[] = [];
                for (let msg of messageSResponseRecebida) {
                    transfomedCastMessagesModelFrontend.push(
                        new Message(msg.content, 'caio nathan', msg._Id));
                }
                this.messageSService = [...transfomedCastMessagesModelFrontend];
                responseRecebida.objSMessageSRecuperadoS = this.messageSService;

                console.log({ myMsgSucesso: responseRecebida.myMsgSucesso });
                console.log({ content: responseRecebida.objSMessageSRecuperadoS[0].content });
                console.log({ id: responseRecebida.objSMessageSRecuperadoS[0].messageId });

                return responseRecebida;
            }),
            catchError((e) => this.errorHandler(e, "getMessage()"))
        )
    }
}
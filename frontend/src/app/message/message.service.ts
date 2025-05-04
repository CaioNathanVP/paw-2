import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";

import { Message } from './message.model';

@Injectable()
export class MessageService{

    private baseUrl = "http://localhost:3000";

    private messageService : Message[] = [];

    //constructor(private http: HttpClient) {}

    private http = inject(HttpClient);

    addMessage(message: Message): Observable<any>{
        this.messageService.push(message);
        console.log(this.messageService);
        console.log("📦 Enviando para o backend:", message);

        return this.http.post<any>(`${this.baseUrl}/message`, message).pipe(
            catchError((e) => this.errorHandler(e, "addMessage()"))
        );
    }


    errorHandler(e: any, info: string): Observable<any>{
        throw({
            info_extra: info,
            error_SS: e,
            error_CS: "Client-Side: errorHandler : Ocorreu um erro!"
        })
    }

    deleteMesage(message: Message){
        this.messageService.splice(this.messageService.indexOf(message),1);
    }

    getMessage(){
        return this.messageService;
    }


}
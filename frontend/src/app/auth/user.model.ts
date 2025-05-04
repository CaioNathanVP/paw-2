export class User {
    constructor (public email: string,
                public senha: string,
                public primeiro_nome?: string,
                public sobrenome?: string){}
}
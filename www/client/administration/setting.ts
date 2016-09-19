export class Setting{
    constructor(
        public timezone: string,        
        public allowUserRegister:boolean,
        public activeNewRegisterByDefault: boolean,
        public useSecurityImage: boolean,
        public requiredConfirmEmailForLogin: boolean, 
        public minPasswordlength: number,
        public maxPasswordLength: number,
        public useNumberInPassword: boolean,
        public useUpperCaseInPassword: boolean,
        public useLowerCaseInPassword: boolean 
    ){}
}
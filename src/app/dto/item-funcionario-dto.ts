export class ItemFuncionarioDTO {
    constructor(
        public codigo: string = '',
        public cedula: string = '',
        public nombre: string = '',
        public apellido: string = '',
        public email: string = '',
        public sede: string = '',
        public funcion: string = '',
        public departamento: string = ''
    ){
        
    }
}

export class CrearFuncionarioDTO {
    constructor(
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

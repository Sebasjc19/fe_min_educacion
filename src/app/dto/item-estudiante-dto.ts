export class ItemEstudianteDTO {
    constructor(
        public codigo: string = '',
        public cedula: string = '',
        public nombre: string = '',
        public apellido: string = '',
        public email: string = '',
        public telefono: string = '',
        public grado: string = ''
    ){
        
    }
}

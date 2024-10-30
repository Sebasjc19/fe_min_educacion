export class ItemDocenteDTO {
    constructor(
        public codigo: string = '',
        public cedula: string = '',
        public nombre: string = '',
        public apellido: string = '',
        public email: string = '',
        public sede: string = '',
        public areaConocimiento: string = ''
    ){
        
    }
}

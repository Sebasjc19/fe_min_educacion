export class CrearDocenteDTO {
    constructor(
        public cedula: string = '',
        public nombre: string = '',
        public apellido: string = '',
        public email: string = '',
        public sede: string = '',
        public areaConocimiento: string = ''
    ){
        
    }
}

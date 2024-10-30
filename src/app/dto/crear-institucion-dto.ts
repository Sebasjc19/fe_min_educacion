export class CrearInstitucionDTO {
    constructor(
        public nombre: string = '',
        public departamento: string = '',
        public  ciudad: string = '',
        public rector: string = '',
        public cantidadEstudiantes: number = 0
        ){}
}

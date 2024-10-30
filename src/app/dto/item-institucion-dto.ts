export class ItemInstitucionDTO {
    constructor(
        public codigo: string = '',
        public nombre: string = '',
        public departamento: string = '',
        public  ciudad: string = '',
        public rector: string = '',
        public cantidadEstudiantes: number = 0
        ){}
}

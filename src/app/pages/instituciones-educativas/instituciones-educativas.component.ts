import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InstitucionesEducativasServicesService } from '../../services/instituciones-educativas-services.service';
import { CrearInstitucionDTO } from '../../dto/crear-institucion-dto';
import { ItemDocenteDTO } from '../../dto/item-docente-dto';
import { ItemInstitucionDTO } from '../../dto/item-institucion-dto';


@Component({
  selector: 'app-instituciones-educativas',
  standalone: true,
  templateUrl: './instituciones-educativas.component.html',
  styleUrls: ['./instituciones-educativas.component.css'], // Asegúrate de que esta ruta sea correcta
  imports: [CommonModule, FormsModule]
})
export class InstitucionesEducativasComponent {

  instituciones: ItemInstitucionDTO[]

  crearInstitucionDTO: CrearInstitucionDTO
  constructor(private  institucionesEducativasService: InstitucionesEducativasServicesService) { 
    this.crearInstitucionDTO = new  CrearInstitucionDTO();
    this.instituciones = [] // AQUI AGREGAR cargarInstituciones() y borrar la linea de abajo
    this.instituciones.push(new  ItemInstitucionDTO("1","2","3","4","5",10))
  }

  onSubmit() {
    // Aquí puedes manejar el envío de los datos, por ejemplo, enviarlos a un servicio o guardarlos
    
  }

  private cargarInstituciones() {
    this.institucionesEducativasService.listarInstituciones().subscribe({
    next: (data) => {
    this.instituciones = data.respuesta;
    },
    error: (error) => {
    console.log("Error al cargar las ciudades");
    }
    });
  }
}

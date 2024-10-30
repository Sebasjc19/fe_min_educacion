import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EstudiantesServicesService } from '../../services/estudiantes-services.service';
import { CrearEstudianteDTO } from '../../dto/crear-estudiante-dto';
import { ItemEstudianteDTO } from '../../dto/item-estudiante-dto';


@Component({
  selector: 'app-estudiantes',
  standalone: true,
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'], // Asegúrate de que esta ruta sea correcta
  imports: [CommonModule, FormsModule]
})
export class EstudiantesComponent {

  estudiantes: ItemEstudianteDTO[]
  crearEstudianteDTO: CrearEstudianteDTO
  constructor(private estudiantesService: EstudiantesServicesService){
    this.crearEstudianteDTO = new CrearEstudianteDTO();
    this.estudiantes = [] //AQUI AGREGAR cargarEstudiantes() y borrar la linea de abajo
    this.estudiantes.push(new  ItemEstudianteDTO("1","2","3","4","5","6","7"))
  }

  onSubmit() {
    
  }

  private cargarEstudiantes() {
    this.estudiantesService.listarEstudiantes().subscribe({
    next: (data) => {
    this.estudiantes = data.respuesta;
    },
    error: (error) => {
    console.log("Error al cargar las ciudades");
    }
    });
    }
}

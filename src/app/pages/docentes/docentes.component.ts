import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocentesServicesService } from '../../services/docentes-services.service';
import { CrearDocenteDTO } from '../../dto/crear-docente-dto';
import { HttpClientModule } from '@angular/common/http';
import { ItemDocenteDTO } from '../../dto/item-docente-dto';


@Component({
  selector: 'app-docentes',
  standalone: true,
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule] // Añade HttpClientModule aquí
})

export class DocentesComponent {
  
  docentes: ItemDocenteDTO[];

  crearDocenteDTO: CrearDocenteDTO;
  
  constructor(private docentesService: DocentesServicesService){
    this.crearDocenteDTO = new CrearDocenteDTO();
    this.docentes = [] //AQUI AGREGAR cargarDocentes() y borrar la linea de abajo
    this.docentes.push(new  ItemDocenteDTO("1","2","3","4","5","6","7"
    ));
  }

  onSubmit() {
    console.log(this.crearDocenteDTO)
    
  }

  private cargarDocentes() {
    this.docentesService.listarDocentes().subscribe({
    next: (data) => {
    this.docentes = data.respuesta;
    },
    error: (error) => {
    console.log("Error al cargar las ciudades");
    }
    });
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FuncionariosServicesService } from '../../services/funcionarios-services.service';
import { CrearFuncionarioDTO } from '../../dto/crear-funcionario-dto';
import { ItemFuncionarioDTO } from '../../dto/item-funcionario-dto';

@Component({
  selector: 'app-funcionario',
  standalone: true,
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'], // Asegúrate de que esta ruta sea correcta
  imports: [CommonModule, FormsModule]
})
export class FuncionariosComponent {
  
  funcionarios: ItemFuncionarioDTO[]
  crearFuncionarioDTO: CrearFuncionarioDTO
  constructor(private funcionarioService: FuncionariosServicesService){
    this.crearFuncionarioDTO = new  CrearFuncionarioDTO();
    this.funcionarios = []
    this.funcionarios.push(new  ItemFuncionarioDTO("1","2","3","4","5","6","7","8"))
  }

  onSubmit() {
    console.log(this.crearFuncionarioDTO)
    
  }

  private cargarFuncionarios() {
    this.funcionarioService.listarFuncionarios().subscribe({
    next: (data) => {
    this.funcionarios = data.respuesta;
    },
    error: (error) => {
    console.log("Error al cargar las ciudades");
    }
    });
  }

}

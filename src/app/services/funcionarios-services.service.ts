import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { CrearFuncionarioDTO } from '../dto/crear-funcionario-dto';


@Injectable({
  providedIn: 'root'
})
export class FuncionariosServicesService {

  private funcionariosURL = "http://localhost:8080/api/funcionarios";

  constructor(private  http: HttpClient) { }

  public listarFuncionarios(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.funcionariosURL}/listar-funcionarios`);
  }

  public agregarFuncionario(funcionarioDTO: CrearFuncionarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.funcionariosURL}/crear-docente`, funcionarioDTO);
  }

}

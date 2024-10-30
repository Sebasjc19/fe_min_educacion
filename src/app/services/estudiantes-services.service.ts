import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { CrearEstudianteDTO } from '../dto/crear-estudiante-dto';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesServicesService {

  private estudiantesURL = "http://localhost:8080/api/estudiantes";

  constructor(private http: HttpClient) {}
  
  public listarEstudiantes(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.estudiantesURL}/listar-estudiantes`);
  }

  public agregarEstudiante(estudianteDTO: CrearEstudianteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.estudiantesURL}/crear-docente`, estudianteDTO);
  }

}
    
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/mensaje-dto';
import { CrearDocenteDTO } from '../dto/crear-docente-dto';

@Injectable({
  providedIn: 'root'
})
export class DocentesServicesService {

  private docentesURL = "http://localhost:8080/api/docentes";

  constructor(private http: HttpClient) { }

  public listarDocentes(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.docentesURL}/listar-docentes`);
  }

  public agregarDocente(docenteDTO: CrearDocenteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.docentesURL}/crear-docente`, docenteDTO);
  }
}

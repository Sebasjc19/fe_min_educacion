import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { CrearInstitucionDTO } from '../dto/crear-institucion-dto';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesEducativasServicesService {
  
  private institucionesURL = "http://localhost:8080/api/instituciones";


  constructor(private http:  HttpClient) { }

  public listarInstituciones(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.institucionesURL}/listar-instituciones`);
  }

  public agregarInstituciones(institucionesDTO: CrearInstitucionDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.institucionesURL}/crear-docente`, institucionesDTO);
  }
  

}

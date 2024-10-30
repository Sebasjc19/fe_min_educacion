import { Routes } from '@angular/router';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { InstitucionesEducativasComponent } from './pages/instituciones-educativas/instituciones-educativas.component'

export const routes: Routes = [
    { 
        path: 'docentes', component: DocentesComponent
     },
     { 
        path: 'funcionarios', component: FuncionariosComponent
     },
     { 
        path: 'estudiantes', component: EstudiantesComponent
     },
     { 
        path: 'instituciones', component: InstitucionesEducativasComponent
     }
];

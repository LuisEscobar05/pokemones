import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasaComponent } from './casa/casa.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component: CasaComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'editar',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ResultadoComponent } from './components/resultado/resultado.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'pregunta', component: PreguntaComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

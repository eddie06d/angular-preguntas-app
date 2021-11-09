import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PreguntaComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

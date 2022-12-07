import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class ElementosModule { }

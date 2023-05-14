import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusquedaComponent,
    
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BusquedaModule { }

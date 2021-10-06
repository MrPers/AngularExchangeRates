import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddDataComponent } from './pages/add-data/add-data.component';
import { CarrenciesComponent } from './pages/carrencies/carrencies.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddDataComponent,
    CarrenciesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [
  ],
  bootstrap: [
    AdminComponent
  ]
})
export class AdminModule { }
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { MatDialogModule } from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddCurrencyComponent } from './pages/add-currency/add-currency.component';
import { AddDataComponent } from './pages/add-data/add-data.component';
import { CarrenciesComponent } from './pages/carrencies/carrencies.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AdminComponent,
    AddDataComponent,
    CarrenciesComponent,
    AddCurrencyComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSortModule,
    MatTableModule,
    // MatDialogModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    // FormsModule,
    // HttpClientModule,
    // MatNativeDateModule,
    // ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [
    AdminComponent
  ]
})
export class AdminModule { }

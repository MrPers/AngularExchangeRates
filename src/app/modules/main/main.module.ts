import { TableComponent } from './pages/table/table.component';
import { ChartComponent } from './pages/chart/chart.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MainComponent } from './main.component';
import { CurrencyService } from 'src/app/services/currency.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AdminRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    ChartComponent,
    TableComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    MatSortModule,
    MatTableModule,
    ChartsModule,
  ],
  providers: [
    CurrencyService,
    ConstantsService
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }

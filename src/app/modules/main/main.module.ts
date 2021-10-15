import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './pages/table/table.component';
import { ChartComponent } from './pages/chart/chart.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AdminRoutingModule } from './main-routing.module';
import { CurrencyService } from '../../services/currency.service';
import { ConstantsService } from '../../services/constants.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserModule } from '@angular/platform-browser';

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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ErrorComponent } from './pages/error/error.component';
// import { TableComponent } from './pages/table/table.component';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
// import { AuthComponent } from './pages/auth/auth.component';
// import { RegistComponent } from './pages/regist/regist.component';
// import { ChartComponent } from './pages/chart/chart.component';
import { CurrencyService } from './services/currency.service';
import { ConstantsService } from './services/constants.service';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    // ErrorComponent,
    // TableComponent,
    // ChartComponent,
    // AuthComponent,
    // RegistComponent,
  ],
  imports: [
    FormsModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    MatSortModule,
    MatTableModule,
    AdminModule
  ],
  providers: [
    CurrencyService,
    ConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

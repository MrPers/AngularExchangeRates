import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorComponent } from './pages/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegistComponent } from './pages/regist/regist.component';
import { CurrencyService } from './services/currency.service';
import { ConstantsService } from './services/constants.service';
import { AdminModule } from './modules/admin/admin.module';
import { MainModule } from './modules/main/main.module';
import { BrowserModule } from '@angular/platform-browser';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorComponent,
    AuthComponent,
    RegistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    MainModule,
    // MatSortModule,
    // MatTableModule
  ],
  providers: [
    CurrencyService,
    ConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

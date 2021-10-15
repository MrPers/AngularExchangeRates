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
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
// import { AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorComponent,
    AuthComponent,
    RegistComponent,
  ],
  imports: [

    // BrowserAnimationsModule,
    // BsDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    MainModule,
    BsDatepickerModule,
  ],
  providers: [
    CurrencyService,
    ConstantsService,
    // provide: MatDialogRef,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ConstantsService } from './../../../../services/constants.service';
import { Component, ViewChild } from '@angular/core';
import { CurrencyService } from '../../../../services/currency.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})


export class AddDataComponent {
  public path: Object = {
    saveUrl: 'https://localhost:44318/api/addcurrencyhistory',
    removeUrl: 'https://localhost:44318/api/addcurrencyhistory',
    // set chunk size for enable the chunk upload https://localhost:44318/api/addcurrencyhistory
    chunkSize: 102400
  };
  event!: any;
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  constructor(private currencyService: CurrencyService, private constantsService: ConstantsService) {
  }

  // uploadListener(event: any): void {
  //   this.event = event;
  // }

  // upload() {
  //   if (this.event != undefined) {
  //     // let files = this.event.srcElement.files;
  //     if (this.isValidCSVFile(this.event.srcElement.files[0])) {
  //       // this.currencyService.addCurrenciesHistory(this.event);
  //       this.currencyService.addCurrenciesHistory(this.event.target.files[0], this.constantsService.name)
  //         .subscribe(response => {
  //           // console.log("response:");
  //           // console.log(response);
  //         });
  //     }
  //   }
  // }

  // isValidCSVFile(file: any) {
  //   return file.name.endsWith(".csv");
  // }

}

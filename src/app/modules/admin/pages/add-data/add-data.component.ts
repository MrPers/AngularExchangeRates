import { ConstantsService} from './../../../../services/constants.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyService } from '../../../../services/currency.service';
export class CSVRecord {
  public name: any;
  public currency: any;
}

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})

export class AddDataComponent {
  event!: any;
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

    constructor(private currencyService:CurrencyService, private constantsService:ConstantsService) {
  }

  uploadListener(event: any): void {
    this.event = event;
  }

  upload(){
    if(this.event != undefined){
      let files = this.event.srcElement.files;
      if (this.isValidCSVFile(files[0])) {
        this.currencyService.addCurrenciesHistory(this.event.target.files[0], this.constantsService.name)
        .subscribe(response => {
          console.log(response);
        });
      }
    }
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

}

import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../../services/currency.service';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})

export class AddCurrencyComponent {

  currencyName: string = ""

  constructor(private currencyService:CurrencyService ) { }

  sendCurrency(){

    const currency = JSON.stringify({ name: this.currencyName} );
    this.currencyService.addCurrencies(currency)
    .subscribe((result) => {
      console.log(result);
    });
  }

}

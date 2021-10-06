import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import {ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import {CurrencyService } from 'src/app/services/currency.service';
import { currency} from '../../../../services/constants.service';

@Component({
  selector: 'chart-page',
  templateUrl: './chart.component.html',
})

export class ChartComponent {

  public lineChartData: ChartDataSets[] = [ { data: [], label: ""}, { data: [], label: ""}];
  public lineChartLabels: Label[] =[];
  public currency = currency;
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public currencies: Array<string> = [];

  public lineChartOptions = {};

  constructor(private currencyService:CurrencyService) {

  }

  onCurrencyChanged(event:any) {
    if(this.currency !== event.value)
    {
      this.currency = event.value;
      this.onDisplay();
    }
  }

  ngOnInit() {
    this.onDisplayMoney();
    this.onDisplay();
  }

  onDisplayMoney() {
    this.currencyService.gettRateMoney()
    .subscribe((result) => {
      const resArray = result.map((el:any)=>{ return el; })
      for (let item of resArray) {
        this.currencies[(item.id - 1)] = item.name;
      };
    });
  }

  onDisplay() {
    this.currencyService.dispatchRateMoney(this.currency)
    .subscribe((result) => {
      debugger;
      const resArray = result[1].map((el:any)=>{ return el; });
      this.lineChartData[0].data = resArray.map((el:any)=>{ return el.sale; });
      this.lineChartData[0].label = result[0] + ' sale';
      this.lineChartData[1].data = resArray.map((el:any)=>{ return el.buy; });
      this.lineChartData[1].label = result[0] + ' buy';
      this.lineChartLabels = resArray.map((el:any)=>{ return (el.data).split('T')[0]; });
    },
    error => console.log(error)
    );
  }
}
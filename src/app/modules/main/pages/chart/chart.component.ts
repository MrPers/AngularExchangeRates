import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import {ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { currency, scale, scales} from '../../../../services/constants.service';
import { CurrencyService } from '../../../../services/currency.service';

@Component({
  selector: 'chart-page',
  templateUrl: './chart.component.html',
})

export class ChartComponent {

  public lineChartData: ChartDataSets[] = [ { data: [], label: ""}, { data: [], label: ""}];
  public lineChartLabels: Label[] =[];
  public currency = currency;
  public scale = scale;
  public dtFinal: any;
  public dtStart: any;
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public currencies: Array<string> = [];
  public scales = scales;

  public lineChartOptions = {};

  constructor(private currencyService:CurrencyService) {

  }

  onCurrencyChanged(event:any) {
    if(this.currency !== event.value)
    {
      this.currency = event.value;
      this.renew();
    }
  }

  onScaleChanged(event:any) {
    if(this.scale !== event.value)
    {
      this.scale = event.value;
      this.renew();
    }
  }

  renew(){
    if(this.dtFinal !== undefined
      || this.dtStart !== undefined)
    {
      this.onDisplay();
    }
  }

  ngOnInit() {
    this.onDisplayMoney();
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
    this.currencyService.dispatchRateMoney(this.currency, this.scale, this.dtStart, this.dtFinal)
    .subscribe((result: any) => {
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

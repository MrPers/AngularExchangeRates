import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import {ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { URLpath } from 'src/main';

@Component({
  selector: 'chart-page',
  templateUrl: './chart.component.html',
})

export class ChartComponent {

  public lineChartData: ChartDataSets[] = [ { data: [], label: ""}, { data: [], label: ""}];
  public lineChartLabels: Label[] =[];

  public lineChartOptions = {
    responsive: true,
  };

  public currency: string = "RUB";
  public currencies: Array<string> = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  public respons: any;

  constructor(private http:HttpClient )
  {

  }

  onCurrencyChanged(event:any) {
    // debugger;
    // console.log(result);
    if(this.currency !== event.value)
    {
      this.currency = event.value;
      this.onInit();
    }
  }

  ngOnInit() {
    this.currencies = ["USD", "EUR", "RUB"];
    this.onInit();
  }

  onInit() {
    this.http.get(URLpath + "/api/"+ this.currency)
    .subscribe((result) => {
      const resArrayStart = Object.values(result);
      const reslabel = resArrayStart[0];
      const resArray = resArrayStart[1].map((el:any)=>{ return el; })
      const sale = resArray.map((el:any)=>{ return el.sale; });
      const buy = resArray.map((el:any)=>{ return el.buy; });
      const labels =  resArray.map((el:any)=>{ return (el.data).split('T')[0]; });
      this.lineChartData[0].data = sale;
      this.lineChartData[0].label = reslabel + ' sale';
      this.lineChartData[1].data = buy;
      this.lineChartData[1].label = reslabel + ' buy';
      this.lineChartLabels = labels;
    });
  }
}

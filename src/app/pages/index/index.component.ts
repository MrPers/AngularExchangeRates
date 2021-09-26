import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import {ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
})

export class IndexComponent {
  
  public lineChartData: ChartDataSets[] = [ { data: [], label: ""}];
  // line :any;
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
    this.http.get("https://localhost:44318/api/Valuta/"+ this.currency)
    .subscribe((result) => {
      const resArrayStart = Object.values(result);
      const reslabel = resArrayStart[0];
      const resArray = resArrayStart[1].map((el:any)=>{ return el; })
      const values = resArray.map((el:any)=>{ return el.value; });
      const labels =  resArray.map((el:any)=>{ 
        const date = new Date(el.label);
        return date.toLocaleDateString(); 
      });
       let d = {
               data: values,
               label: ''+reslabel
             } as ChartDataSets;
        
       this.lineChartData[0].data = values;
       this.lineChartData[0].label =''+reslabel;
       this.lineChartLabels = labels;
    });
  }
}

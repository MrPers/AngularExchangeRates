import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {PageChangedEvent } from 'ngx-bootstrap/pagination';
import { currency, scale, scales} from '../../../../services/constants.service';
import { CurrencyService } from '../../../../services/currency.service';

export class  PeriodicElement {
  public position!: number;
  public buy!: number;
  public sale!: number;
  public data!: string;
}

@Component({
  selector: 'table-page',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})

export class TableComponent{
  displayedColumns: string[] = ['position', 'buy', 'sale', 'data'];
  allResultData! : PeriodicElement[];
  resultData! : PeriodicElement[];
  dataSource = new MatTableDataSource(this.allResultData);
  public currency = currency;
  public currencies: Array<string> = [];
  rotate = false;
  public scales = scales;
  public scale = scale;
  public dtFinal: any;
  public dtStart: any;
  maxSize = 5;
  currentPage = 1;
  smallnumPages! : number;
  @ViewChild(MatSort) sort: any;

  constructor(private currencyService:CurrencyService ){}

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

  AfterViewInit() {
    this.allResultData = [];
    // debugger;
    for (var i = (this.currentPage - 1)* 10; i < (this.currentPage)* 10; i++) {
      this.allResultData.push({
        position: this.resultData[i].position,
        buy: this.resultData[i].buy,
        sale: this.resultData[i].sale,
        data: this.resultData[i].data
      });
    };
    this.dataSource = new MatTableDataSource(this.allResultData);
    this.dataSource.sort = this.sort;
  }

  onDisplay() {
    this.currencyService.dispatchRateMoney(this.currency, this.scale, this.dtStart, this.dtFinal)
    .subscribe((result:any) => {
      this.smallnumPages = 1;
      this.resultData = [];
      const resArray = result[1].map((el:any)=>{ return el; })
      for (let item of resArray) {
        this.resultData.push({
          position: this.smallnumPages,
          buy: item.buy,
          sale: item.sale,
          data: ((item.data).split('T')[0]+ ' ' +(item.data).split('T')[1])});
        this.smallnumPages ++;
      };
      this.smallnumPages=this.smallnumPages-1;
      this.AfterViewInit();
    });
  }

  onCurrencyChanged(event:any) {
    if(this.currency !== event.value)
    {
      this.currency = event.value;
      this.onDisplay();
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

  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    this.AfterViewInit();
  }

}


import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {PageChangedEvent } from 'ngx-bootstrap/pagination';
import { URLpath } from 'src/main';

export interface PeriodicElement {
  position: number;
  buy: number;
  sale: number;
  data: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, buy: 34, sale: 1.0079, data: 'H'},
  {position: 2, buy: 56, sale: 4.0026, data: 'He'},
];

@Component({
  selector: 'table-page',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})

export class TableComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'buy', 'sale', 'data'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public currency: string = "RUB";
  public currencies: Array<string> = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private http:HttpClient )
  {

  }

  ngOnInit() {
    this.currencies = ["USD", "EUR", "RUB"];
    this.onInit();
  }

  onInit() {
    this.http.get(URLpath + "/api/"+ this.currency)
    .subscribe((result) => {
      const resArrayStart = Object.values(result);
      const resArray = resArrayStart[1].map((el:any)=>{ return el; })
      const sale = resArray.map((el:any)=>{ return el.sale; });
      const buy = resArray.map((el:any)=>{ return el.buy; });
      const labels =  resArray.map((el:any)=>{ return (el.data).split('T')[0]; });


      // for(el)


      debugger;
      console.log(result);
    });
  }

  currentPage = 1;
  page?: number;

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
  }
}


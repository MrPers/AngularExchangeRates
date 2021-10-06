import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CurrencyService } from 'src/app/services/currency.service';

export interface PeriodicElement {
  name: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Li'},
]

@Component({
  selector: 'app-carrencies',
  templateUrl: './carrencies.component.html',
  styleUrls: ['./carrencies.component.css']
})

export class CarrenciesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource: any;
  resultData! : PeriodicElement[];

  @ViewChild(MatSort) sort: any;

  constructor(private currencyService:CurrencyService ){}

  ngOnInit(): void {
    this.onDisplay();
  }

  onDisplay() {
    this.currencyService.gettRateMoney()
    .subscribe((result) => {
      this.resultData = [];
      const resArray = result.map((el:any)=>{ return el; })
      for (let item of resArray) {
        this.resultData.push({
          id: item.id,
          name: item.name,
        });
      };
      this.dataSource = new MatTableDataSource(this.resultData);
      this.dataSource.sort = this.sort;
    });
  }
}

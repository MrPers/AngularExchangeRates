import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CurrencyService } from '../../../../services/currency.service';
import {MatDialog} from '@angular/material/dialog';
import { AddCurrencyComponent } from '../add-currency/add-currency.component';
import { AddDataComponent } from '../add-data/add-data.component';
import { ConstantsService } from '../../../../services/constants.service';

export interface PeriodicElement {
  name: string;
  id: number;
}

@Component({
  selector: 'app-carrencies',
  templateUrl: './carrencies.component.html',
  styleUrls: ['./carrencies.component.css']
})

export class CarrenciesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'add'];
  dataSource: any;
  resultData! : PeriodicElement[];
  @ViewChild(MatSort) sort: any;

  constructor(public dialog: MatDialog, private currencyService:CurrencyService, private constantsService:ConstantsService ){}

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

  openDialog() {
    const dialogRef = this.dialog.open(AddCurrencyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log({result});
      this.onDisplay();
    });
  }

  openHistoryDialog(name: string) {
    this.constantsService.name = name;
    const dialogRef = this.dialog.open(AddDataComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log({result});
    });
  }
}

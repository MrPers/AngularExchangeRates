import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Li'},
]

@Component({
  selector: 'app-carrencies',
  templateUrl: './carrencies.component.html',
  styleUrls: ['./carrencies.component.css']
})
export class CarrenciesComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;

  ngOnInit(): void {
    this.displayedColumns= ['position', 'name'];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  @ViewChild(MatSort) sort: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

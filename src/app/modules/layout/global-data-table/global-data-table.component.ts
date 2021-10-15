import { Component, OnInit,  Output,Input,  EventEmitter,ViewChild, AfterViewInit  } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-global-data-table',
  templateUrl: './global-data-table.component.html',
  styleUrls: ['./global-data-table.component.css']
})
export class GlobalDataTableComponent implements OnInit, AfterViewInit {
    //input from layout
  @Input() globalData:any; 
    //angular material table dependencies 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] 
  dataSource:any 

  constructor() { }

  ngOnInit(): void {

    this.displayedColumns = this.globalData.columns
    this.dataSource =   new MatTableDataSource(this.globalData.data); 
  
  }



  ngAfterViewInit() {
        // setting pagination and sort for country table 
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}

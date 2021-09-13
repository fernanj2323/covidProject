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
  @Input() globalData:any; 
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}

import { Component, OnInit,  Output,Input,  EventEmitter,ViewChild, AfterViewInit  } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements AfterViewInit, OnInit  {
  @Input() dataTable:any; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] 
  dataSource:any 


  constructor(


  ) { 

 

  }

  ngOnInit(): void {
    this.displayedColumns = this.dataTable.columns
    this.dataSource =   new MatTableDataSource(this.dataTable.data); 

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}

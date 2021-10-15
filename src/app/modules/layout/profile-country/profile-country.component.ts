import { Component, OnInit,  Output,Input,  EventEmitter,ViewChild, AfterViewInit  } from '@angular/core';
@Component({
  selector: 'app-profile-country',
  templateUrl: './profile-country.component.html',
  styleUrls: ['./profile-country.component.css']
})
export class ProfileCountryComponent implements OnInit {

  // input from layout component 
  @Input() countrySelected:any; 


  constructor() { }

  ngOnInit(): void {

  }

}

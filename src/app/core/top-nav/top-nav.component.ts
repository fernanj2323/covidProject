import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(
    public router: Router,

  ) { }

  ngOnInit(): void {
  }


  redirect(){

    const url = '/'
    this.router.navigate([url]);
  }
}

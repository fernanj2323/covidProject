import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() globalData: any; 
  @Output() finallyLoading: EventEmitter <any> = new EventEmitter(); 



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = ['2000', '2001', '2002', '2003', '2004', '2005', '2006'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {data: [75, 49, 89, 31, 86, 35, 50], label: 'Series A'},
    {data: [48, 38, 65, 39, 66, 17, 80], label: 'Series B'}
  ];

  canvas
  ctx
  showChart = false 
  loader1 = true 
  loader2 = true 
  loader3 = true 
  constructor() { }


  ngOnInit() {


      this.makeChart1()
      this.makeChart2()
      this.makeChart3()
  }
  
  // recoveres per day chart 
  makeChart3(){
    var dataLabels = []
    var data = []
    var count0 
    var count1
    var count = 0
    for  (let i of  this.globalData.data) { 
      
 
      count = count + 1 
      if (count <= 7){
      count0 = dataLabels.push(i.date)
      count1 = data.push(i.recoveres)
      }
    }



    this.loader3 = false 
    this.canvas = document.getElementById('myChart3');
    this.ctx = this.canvas.getContext('2d');
   let myChart = new Chart(this.ctx, {
     type: 'line',

     data: {
       labels: dataLabels,
       datasets: [{
           label: `Patiend Recovered per Day`,
           data: data,
           backgroundColor: [
             'rgba(126, 245, 190, 1)',
           ],
           borderWidth: 1
       }],
       
   },
   options: {
     responsive: false,
   
     scales: {
       yAxes: [{
           display: true,
           ticks: {
    
           }
       }]
   }
   }

   })
 
  }

  // deaths per Day chart 
  makeChart2(){
    var dataLabels = []
    var data = []
    var count0 
    var count1
    var count = 0
    for  (let i of  this.globalData.data) { 
      
 
      count = count + 1 
      if (count <= 7){
      count0 = dataLabels.push(i.date)
      count1 = data.push(i.deaths)
      }
    }


    this.loader2 = false

    this.canvas = document.getElementById('myChart2');
    this.ctx = this.canvas.getContext('2d');
   let myChart = new Chart(this.ctx, {
     type: 'line',

     data: {
       labels: dataLabels,
       datasets: [{
           label: `Deaths per Day`,
           data: data,
           backgroundColor: [
            'rgba(245, 126, 126, 1)',
           ],
           borderWidth: 1
       }],
       
   },
   options: {
     responsive: false,

     scales: {
       yAxes: [{
           display: true,
           ticks: {
       
           }
       }]
   }
   }

   })
 
  }

  // New Case per Day chart 
  makeChart1(){
    var dataLabels = []
    var data = []
    var count0 
    var count1
    var count = 0
    for  (let i of  this.globalData.data) { 
      
 
      count = count + 1 
      if (count <= 7){
      count0 = dataLabels.push(i.date)
      count1 = data.push(i.cases)
      }
    }


    this.loader1 = false 

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

   let myChart = new Chart(this.ctx, {
     type: 'line',

     data: {
       labels: dataLabels,
       datasets: [{
           label: `New Case per Day`,
           data: data,
           backgroundColor: [
             'rgba(120, 208, 231, 1)',
           ],
           borderWidth: 1
       }],
       
   },
   options: {
     responsive: false,
   
     scales: {
       yAxes: [{
           display: true,
           ticks: {
      
           }
       }]
   }
   }

   })

  }



}

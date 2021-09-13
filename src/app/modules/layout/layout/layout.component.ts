import { Component, OnInit } from '@angular/core';
import {  DiseaseServiceService } from 'src/app/core/services/disease-service.service'
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public dataTable:any 
  public globalData:any
  public dataCountry:any 
  countries 
  tableLoader = true 
  tableLoader2 = true 
  countriesSelected
  countrySelected
  usa
  colombia
  canada
  fullArray 

  profileMode = false 
  label1 
  label2 
  charCaseData
  charDeathsData
  charRecoveredData
  constructor(
    private DiseaseServiceService: DiseaseServiceService ,
    public route: ActivatedRoute,
  ) {

    const params = this.route.snapshot.params["country"]; 
    if (params){
      this.profileMode = true 
       this.label1 = 'Data' 
       this.label2 = 'Country data per day' 
    }else{ 
      this.profileMode = false 
      this.label1 = 'List by Country' 
      this.label2 = 'Global data per day' 
    }
   }

  ngOnInit(): void {
    // this.getCountries()
    if (!this.profileMode){
      this.getSpecificCountrires()
      this.getHistoricalData()
    }else{ 
      this.getSpecificCountry()
      this.getHistoricalDataByCountry()
    }
 
  }

  getHistoricalDataByCountry(){
    const params = this.route.snapshot.params["country"];
    this.DiseaseServiceService.getHistoricalDataByCountry(params).subscribe
    (res=>{
     

      var response = res as any 

      var cases = response.timeline.cases 
      var deaths = response.timeline.deaths 
      var recovered = response.timeline.recovered 
      
      // cases 
      const casesArr =  JSON.stringify(cases);
      const casesArr1 = casesArr.replace(/[\"{]/g, "");
      const casesArr2= casesArr1.split(',')

      //deaths 
      const deathsArr =  JSON.stringify(deaths);
      const deathsArr1 = deathsArr.replace(/[\"{]/g, "");
      const deathsArr2= deathsArr1.split(',')
    
      //recovered 
      const recoveredArr =  JSON.stringify(recovered);
      const recoveredArr1 = recoveredArr.replace(/[\"{]/g, "");
      const recoveredArr2= recoveredArr1.split(',')


      var casesResult 
      var deathsResult 
      var recoveredResult 
      
      var fullArray = []
      for (var i=0; i < casesArr2.length; i++) {

         casesResult = casesArr2[i].split(':')
         const caseOfTheDay = casesResult[1]
         const date = casesResult[0]

        deathsResult = deathsArr2[i].split(':')
        const deathsOfTheDay = deathsResult[1]

        recoveredResult = recoveredArr2[i].split(':')
        const recoveresOfTheDay = recoveredResult[1]


         fullArray[i] = ({
          date: date,
          cases:caseOfTheDay,     
          recoveres: recoveresOfTheDay,
          deaths: deathsOfTheDay, 
          // position: i
        })

        if (i  == casesArr2.length - 1){
    
          const deathsSort = fullArray.sort(function(a,b){return b.deaths - a.deaths;});
          const casesSort = fullArray.sort(function(a,b){return b.cases - a.cases;});
          const recoversSort = fullArray.sort(function(a,b){return b.recoveres - a.recoveres;});



          const firstDeath = deathsSort[0]
          const firtsCase = casesSort[0]
          const firstRecover = recoversSort[0]
          

          
          if (firstRecover.color){
            if (firstRecover.color == 'red' ){
            }else if (firstRecover.color == 'yellow'){
            }else{ 
              firstRecover.color = 'green'
            }
          }else{ 
            firstRecover.color = 'green'
          }

          if (firtsCase.color){
            if (firtsCase.color == 'red' ){
            }else if (firtsCase.color == 'green'){
              firtsCase.color = 'yellow'
            }
          }else{ 
            firtsCase.color = 'yellow' 
          }
          firstDeath.color = 'red'
        }

      }
    

        this.globalData = ({
          data: fullArray,
          columns: ['date', 'cases', 'recoveres', 'deaths']
        })

        this.charCaseData = ({
          data: fullArray,
          config: 1 
        })


        this.charDeathsData = ({
          data: fullArray,
          config: 2
        })

        this.charRecoveredData = ({
          data: fullArray,
          config: 3
        })


      this.tableLoader2 = false 
 
    }, err=>{
      console.log(err)
    })
  }

  getHistoricalData(){
    this.DiseaseServiceService.getHistorical().subscribe
    (res=>{
  
      var response = res as any 

      var cases = response.cases 
      var deaths = response.deaths 
      var recovered = response.recovered 
      
      // cases 
      const casesArr =  JSON.stringify(cases);
      const casesArr1 = casesArr.replace(/[\"{]/g, "");
      const casesArr2= casesArr1.split(',')

      //deaths 
      const deathsArr =  JSON.stringify(deaths);
      const deathsArr1 = deathsArr.replace(/[\"{]/g, "");
      const deathsArr2= deathsArr1.split(',')
 
      //recovered 
      const recoveredArr =  JSON.stringify(recovered);
      const recoveredArr1 = recoveredArr.replace(/[\"{]/g, "");
      const recoveredArr2= recoveredArr1.split(',')


      var casesResult 
      var deathsResult 
      var recoveredResult 
      
      var fullArray = []
      for (var i=0; i < casesArr2.length; i++) {

         casesResult = casesArr2[i].split(':')
         const caseOfTheDay = casesResult[1]
         const date = casesResult[0]

        deathsResult = deathsArr2[i].split(':')
        const deathsOfTheDay = deathsResult[1]

        recoveredResult = recoveredArr2[i].split(':')
        const recoveresOfTheDay = recoveredResult[1]


         fullArray[i] = ({
          date: date,
          cases:caseOfTheDay,     
          recoveres: recoveresOfTheDay,
          deaths: deathsOfTheDay, 
          // position: i
        })

        if (i  == casesArr2.length - 1){
    
          const deathsSort = fullArray.sort(function(a,b){return b.deaths - a.deaths;});
          const casesSort = fullArray.sort(function(a,b){return b.cases - a.cases;});
          const recoversSort = fullArray.sort(function(a,b){return b.recoveres - a.recoveres;});



          const firstDeath = deathsSort[0]
          const firtsCase = casesSort[0]
          const firstRecover = recoversSort[0]
          

          
          if (firstRecover.color){
            if (firstRecover.color == 'red' ){
            }else if (firstRecover.color == 'yellow'){
            }else{ 
              firstRecover.color = 'green'
            }
          }else{ 
            firstRecover.color = 'green'
          }

          if (firtsCase.color){
            if (firtsCase.color == 'red' ){
            }else if (firtsCase.color == 'green'){
              firtsCase.color = 'yellow'
            }
          }else{ 
            firtsCase.color = 'yellow' 
          }
          firstDeath.color = 'red'
        }

      }
    

        this.globalData = ({
          data: fullArray,
          columns: ['date', 'cases', 'recoveres', 'deaths']
        })

        this.charCaseData = ({
          data: fullArray,
          config: 1 
        })


        this.charDeathsData = ({
          data: fullArray,
          config: 2
        })

        this.charRecoveredData = ({
          data: fullArray,
          config: 3
        })


      this.tableLoader2 = false 
 
    }, err=>{
      console.log(err)
    })
  }

  getSpecificCountry(){
    const params = this.route.snapshot.params["country"]; 
    this.DiseaseServiceService.getDataByCountry(params).subscribe
    (res=>{
      var response = res as any
  
      this.countrySelected = ({
        country:response.country, 
        totalCases:response.cases, 
        newCases:response.todayCases, 
        totalRecovered:response.recovered, 
        newRecovered:response.todayRecovered, 
        totalDeaths:response.deaths, 
        newDeaths:response.todayDeaths, 
        totalTest:response.tests, 
        newTest:response.oneTestPerPeople,
        flag:response.countryInfo.flag
    })


    this.tableLoader = false 
    })
  }
  getSpecificCountrires(){
  //usa 
  //colombia
  //canada
    this.DiseaseServiceService.getDataByCountry('usa').subscribe
    (res=>{
      var usa = res as any
      this.usa = ({
          country:'USA', 
          totalCases:usa.cases, 
          newCases:usa.todayCases, 
          totalRecovered:usa.recovered, 
          newRecovered:usa.todayRecovered, 
          totalDeaths:usa.deaths, 
          newDeaths:usa.todayDeaths, 
          totalTest:usa.tests, 
          newTest:usa.oneTestPerPeople,
          flag:usa.countryInfo.flag
      })
      this.DiseaseServiceService.getDataByCountry('colombia').subscribe
      (res=>{
        var colombia = res as any
        this.colombia = ({
            country:'colombia', 
            totalCases:colombia.cases, 
            newCases:colombia.todayCases, 
            totalRecovered:colombia.recovered, 
            newRecovered:colombia.todayRecovered, 
            totalDeaths:colombia.deaths, 
            newDeaths:colombia.todayDeaths, 
            totalTest:colombia.tests, 
            newTest:colombia.oneTestPerPeople,
            flag:colombia.countryInfo.flag
        })
        this.DiseaseServiceService.getDataByCountry('canada').subscribe
        (res=>{
        
          var canada = res as any
          this.canada = ({
              country:'canada', 
              totalCases:canada.cases, 
              newCases:canada.todayCases, 
              totalRecovered:canada.recovered, 
              newRecovered:canada.todayRecovered, 
              totalDeaths:canada.deaths, 
              newDeaths:canada.todayDeaths, 
              totalTest:canada.tests, 
              newTest:canada.oneTestPerPeople,
              flag:canada.countryInfo.flag
          })
    
          

          const data = []
           data.push(this.usa, this.colombia, this.canada)

          this.dataTable = ({
            data: data,
            columns: ['Country', 'Total Cases', 'New Cases', 'Total Recovered', 'New Recovered', 'total Deaths', 'new Deaths', 'total Test','new Test' ]
          })



       

          this.tableLoader = false 
        },err=>{
          console.log(err)
        })
  
      } ,err=>{
        console.log(err)
      })



     

    } ,err=>{
      console.log(err)
    })
  }

  getCountries(){
    this.DiseaseServiceService.getCountries().subscribe
    (res=>{
    
      this.countries  = res as any 
      for (var i=0; i < this.countries.length; i++) {

        const string = JSON.stringify(this.countries[i].timeline)
        const resultado = string.split(':')
        const date = resultado[0].replace(/[{"]/g, "");
        const quantity = resultado[1].replace(/[}]/g, "");
        this.countries[i].date = date
        this.countries[i].quantity = quantity


      }

      this.dataTable = ({
        data: this.countries,
        columns: ['Country', 'Total Cases', 'New Cases', 'symbol']
      })
      this.tableLoader = false 
     
     


    }, err=>{
      console.log(err)
    })
  }
}

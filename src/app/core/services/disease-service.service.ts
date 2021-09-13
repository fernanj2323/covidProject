import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiseaseServiceService {



  readonly url = 'https://disease.sh/v3/covid-19/'
  constructor(private http: HttpClient) {

  }
  public getCountries() {
    return this.http.get(`${this.url}vaccine/coverage/countries?lastdays=1` )
  }


  public getDataByCountry(country) {
    return this.http.get(`${this.url}countries/${country}`)
  }

  public getHistorical(){
    return this.http.get(`${this.url}historical/all?lastdays=all`)
  }

  public getHistoricalDataByCountry(country){
    return this.http.get(`${this.url}historical/${country}?lastdays=all`)
  }
}

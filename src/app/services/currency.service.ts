import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';
import { URLpath } from './constants.service';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http:HttpClient ) {

  }

  dispatchRateMoney(currency: string) : Observable<any> {
    return this.http.get(URLpath + 'currencyhistory/' + currency);
  };

  addCurrencies(currency: any){
    return this.http.post(URLpath + 'addcurrency', currency, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };

  gettRateMoney() : Observable<any> {
    return this.http.get(URLpath + 'currency/');
  };

  registerUser(body: any) : Observable<any> {
    return this.http.post(URLpath + "regist", body, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };

  addCurrenciesHistory(input: any, name: string) : Observable<any> {
    let testData:FormData = new FormData();
    testData.append('file', input, name + '/' + input.name);
    return this.http.post(URLpath + "addcurrencyhistory", testData, {
      //  и без этого работает, надо разобраться
      reportProgress: true, // Без observe: 'events' не работает
      observe: 'events', // без reportProgress: true только HttpEventType.Sent и HttpEventType.Response
    });
  };
}



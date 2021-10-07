import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  sendNewCurrencies(currency: string) : Observable<any> {
    return this.http.post(URLpath + 'addCurrency', currency, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };

  gettRateMoney() : Observable<any> {
    return this.http.get(URLpath + 'currency/');
  };

  registerUser(body: string) : Observable<any> {
    return this.http.post(URLpath + "regist", body, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };
}



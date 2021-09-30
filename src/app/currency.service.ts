import { HttpClient } from '@angular/common/http';
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
    return this.http.get(URLpath + currency);
  };

}



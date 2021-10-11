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

  // uploadDoc(input: any, name: string) : Observable<any> {
  //     let testData:FormData = new FormData();
  //     testData.append('file', input, name + '/' + input.name);
  //     return this.http.post('https://localhost:44318/api/addcurrencyhistory', testData, {
  //       //  и без этого работает, надо разобраться
  //       reportProgress: true, // Без observe: 'events' не работает
  //       observe: 'events', // без reportProgress: true только HttpEventType.Sent и HttpEventType.Response
  //     });
  // };

  // addCurrenciesHistory(event: any) {
  //   let lastChunksize = 0;
  //   var file = event.target.files[0];

  //   this.readFile(file, lastChunksize, this.myCallback.bind(this));

  //  }

  //  myCallback(file: any, lastChunksize: any, result: any) {
  //   lastChunksize = lastChunksize + 20000;
  //   if(result) {
  //     // console.log(file);
  //     this.readFile(file, lastChunksize, this.myCallback.bind(this));
  //   } else {
  //     //end recursion
  //   }
  //  }

  //  readFile(file: any,lastChunksize: number, callback: any) {
  //   let fileBlob = file.slice(lastChunksize,lastChunksize+20000);
  //   if(fileBlob.size !=0) {
  //     // this.uploadDoc(fileBlob, file.name);
  //     let fileReader = new FileReader();
  //     fileReader.onloadend= (result)=>{
  //     return callback(file,lastChunksize,fileReader.result);
  //     }
  //     fileReader.readAsText(fileBlob);
  //   }else {
  //    return callback(file,lastChunksize,false);
  //   }
  //  };

    addCurrenciesHistory(input: any, name: string) : Observable<any> {
      let testData:FormData = new FormData();
      testData.append('file', input, name + '/' + input.name);
      return this.http.post('https://localhost:44318/api/addcurrencyhistory', testData, {
        //  и без этого работает, надо разобраться
        reportProgress: true, // Без observe: 'events' не работает
        observe: 'events', // без reportProgress: true только HttpEventType.Sent и HttpEventType.Response
      });
  };
}



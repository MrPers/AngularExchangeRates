import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
export class CSVRecord {
  public name: any;
  public currency: any;
}

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})

export class AddDataComponent {

  constructor(private http:HttpClient ) {

  }
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  uploadListener($event: any): void {
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {
      let input = $event.target.files[0];
      // let reader = new FileReader();
      // reader.readAsText(input);

      let testData:FormData = new FormData();
      testData.append('file', input, input.name);
      debugger;

      this.http.post('https://localhost:44318/api/addcurrency', testData, {
        reportProgress: true, // Без observe: 'events' не работает
        observe: 'events', // без reportProgress: true только HttpEventType.Sent и HttpEventType.Response
      })
      .subscribe(response => {
        console.log(response);
      });
    }
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  // getHeaderArray(csvRecordsArr: any) {
  //   let headers = (<string>csvRecordsArr[0]).split(',');
  //   let headerArray = [];
  //   for (let j = 0; j < headers.length; j++) {
  //     headerArray.push(headers[j]);
  //   }
  //   return headerArray;
  // }

}

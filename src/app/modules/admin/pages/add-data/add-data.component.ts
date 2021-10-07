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

  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  uploadListener($event: any): void {
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {
      debugger;
      let input = $event.target;
      let reader = new FileReader();
      
      reader.readAsText(input.files[0]);

      reader.onload = (event) => {
        const file = event.target.result;
        const allLines = file.split(/\r\n|\n/);
        // Reading line by line
        allLines.forEach((line) => {
            console.log(line);
        });
    };

      debugger;
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        // let headersRow = this.getHeaderArray(csvRecordsArray);
        debugger;


      };
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../services/constants.service';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'aregist-page',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})

export class RegistComponent{

  public user: User = {
    name: "",
    phone: "+380",
    email: "",
    password: ""
  };
  myForm : FormGroup;

  constructor(private currencyService:CurrencyService, formBuilder: FormBuilder, private http:HttpClient ){
      this.myForm = formBuilder.group({
          "userName": ["", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
          "userPassword": ["", [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z0-9]+$')]],
          "userEmail": ["", [ Validators.required, Validators.email]],
          "userPhone": new FormControl("", Validators.pattern("[+][0-9]{9}"))
      });
  }

  onClick() {

    let body = JSON.stringify(this.user);
    this.currencyService.registerUser(body)
     .subscribe((data) => {
        // alert("Имя:" + (data?.name ?? 'Имя по умолчанию') + "\n" + "Id:" +(data?.id ?? 'Id нету') );
      },
      error => console.log(error)
     );
  }

  formPhone(){
    return (this.myForm.controls['userPhone'].invalid && this.myForm.controls['userPhone'].touched)? true : false;
  }
  formPassword(){
    return (this.myForm.controls['userPassword'].invalid && this.myForm.controls['userPassword'].touched)? true : false;
  }
  formName(){
    return (this.myForm.controls['userName'].invalid && this.myForm.controls['userName'].touched) ? true : false;
  }
  formEmail(){
    return (this.myForm.controls['userEmail'].invalid && this.myForm.controls['userEmail'].touched) ? true : false;
  }

  submit(){
      console.log(this.myForm);
  }
  userNameValidator(control: FormControl): {[s:string]:boolean}|null{

    if(control.value==="not"){
        return {"userName": true};
    }
    return null;
  }
}

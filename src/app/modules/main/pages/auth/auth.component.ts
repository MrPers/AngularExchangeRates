import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLpath } from 'src/app/services/constants.service';

export interface User{
  name:string;
  phone:string;
  email:string;
  password:string;
}

@Component({
  selector: 'auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent{

  public user: User = {
    name: "",
    phone: "+380",
    email: "",
    password: ""
  };
  public received : any;

  myForm : FormGroup;

  onClick() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const body=JSON.stringify(this.user);
    this.http.post(URLpath +"/api/regist",body, httpOptions)
     .subscribe(
      (data: any) => {
        this.received = {
          name: data.name,
          id: data.id
        };
        alert("Имя:" + (this.received?.name ?? 'Имя по умолчанию') + "\n" + "Id:" +(this.received?.id ?? 'Id нету') );
      },
      error => console.log(error)
     );
    //  debugger;
  }

  constructor(private formBuilder: FormBuilder, private http:HttpClient ){
      this.myForm = formBuilder.group({
          "userName": ["", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
          "userPassword": ["", [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z0-9]+$')]],
          // "userEmail": ["", [ Validators.required, Validators.email]],
          // "userPhone": new FormControl("", Validators.pattern("[+][0-9]{9}"))
      });
  }

  formPassword(){
    return (this.myForm.controls['userPassword'].invalid && this.myForm.controls['userPassword'].touched)? true : false;
  }
  formName(){
    return (this.myForm.controls['userName'].invalid && this.myForm.controls['userName'].touched) ? true : false;
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface User{
name: string;
phone: string;
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
  public userId ="";
  public userName ="";
  public hello: any;

  myForm : FormGroup;

  onClick() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const body=JSON.stringify(this.user);
    this.http.post("https://localhost:44318/api/regist",body, httpOptions)
     .subscribe(
      (data: any) => {this.hello=data;},
      error => console.log(error)
     );
     debugger;
  }

  constructor(private formBuilder: FormBuilder, private http:HttpClient ){
      this.myForm = formBuilder.group({
          "userName": ["", [Validators.required]],
          "userEmail": ["", [ Validators.required, Validators.email]],
          "userPhone": new FormControl("", Validators.pattern("[+][0-9]{9}"))
      });
  }

  formPhone(){
    return (this.myForm.controls['userPhone'].invalid && this.myForm.controls['userPhone'].touched)? true : false;
  }
  formPasword(){
    return (this.myForm.controls['userPhone'].invalid && this.myForm.controls['userPhone'].touched)? true : false;
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit { 
  error = false;
  guard = false;
  loginValue:any;
  passValue:any;
  form = new FormGroup({
    login : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  constructor( private router :Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginValue=(this.form.value.login);
    this.passValue=(this.form.value.password);
    if (this.loginValue=="admin" && this.passValue=="admin"){
      localStorage.setItem("token","admin");
      this.router.navigate(["home"]);
    }
    else{
      this.error=true;
    }
  }


 
}
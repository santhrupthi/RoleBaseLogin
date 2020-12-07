import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators  } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from "@angular/router";
import {IUserToken} from '../model/user_Token.interface'
import {AuthService} from '../service/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  FormDatas = FormGroup;
  constructor(private formBuilder: FormBuilder ,private AuthService :AuthService, private router: Router) { }
  registerForm : FormGroup;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      grant_type:new FormControl('',[Validators.required])
    })
  }
  get f() { return this.registerForm.controls; }

  loginForm(formObj){
    let values = formObj.value;
    let email = values.email;
    let password = values.password
   
    this.AuthService
      // .getUserToken("admin@test.com", "12345")
      .getUserToken(email, password)
      .subscribe((response: IUserToken) => {
        console.log('response coming',response);
        this.AuthService.doLogin(response);
       
        let user = (response.roles).find(e => true);
        console.log('response coming',user);
        // if(user == 'ROLE_ADMIN'){
        //   this.router.navigate(["/admin"]);
        // }else if(user == 'ROLE_USER'){
        //   this.router.navigate(["/user"]);
        // }
        
      },(error:any)=>{
        console.error('this error',error.error.message);
        alert(error.error.message) ;       
      }
      );
  }
  
  // logoutform(){
  //   alert("fh");
  //   this.AuthService.lagout('Demo1@gmail.com');
  // }

}

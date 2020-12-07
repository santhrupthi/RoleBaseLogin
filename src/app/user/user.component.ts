import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor( private AuthService : AuthService,private router : Router) { }

  ngOnInit() {
  }
  logout(){
     this.AuthService.doLogout();
     this.router.navigate(['/login']);
  }
}

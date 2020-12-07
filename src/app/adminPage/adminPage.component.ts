import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor( private AuthService :AuthService , private router :Router) { }

  ngOnInit() {
  }
  logout(){
    this.AuthService.doLogout();
    this.router.navigate(['/login']);
 }
}

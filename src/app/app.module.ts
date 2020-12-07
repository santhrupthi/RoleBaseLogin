import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './service/auth.service';
import {CanActiveService} from './service/canActive.service'
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from './PageNotFound/pageNotFound.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [				
    AppComponent,
      AdminPageComponent,
      UserComponent,
      LoginComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatGridListModule,
    MatCarouselModule.forRoot(),
    NgbModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot([
      {
        path: "user",
        component: UserComponent,
        canActivate: [CanActiveService],
      },
      {
        path: "login",
        component: LoginComponent,
        
      },
      {
        path: "admin",
        component: AdminPageComponent,
        canActivate: [CanActiveService],
      },
      {
        path: "",
        component: LoginComponent
      },
      {
        path :'**',
        component : PageNotFoundComponent
      }
      
 ])
  ],
  providers: [AuthService],
  bootstrap: [HomeComponent]
})
export class AppModule { }

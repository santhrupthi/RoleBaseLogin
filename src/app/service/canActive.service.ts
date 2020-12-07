import { Injectable } from "@angular/core";
import {Router} from '@angular/router'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable({
  providedIn: 'root'
})
export class CanActiveService implements CanActivate {
  constructor(private authService: AuthService , private router :Router ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
       
      if(this.authService.getLoggedInUserData() !== null) {
        return true;
      }
      this.router.navigate(["/notfound"]);
   // return this.authService.getLoggedInUserData() !== null;
  }
}

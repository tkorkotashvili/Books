import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  message:boolean;
  
  constructor(private router:Router,){}
  canActivate(
    next: ActivatedRouteSnapshot,
    
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('token') ==="admin"){
      return true;
    }else{
    this.router.navigate([""]);
    return false;
  }
}
  ngOnInit(){
    
  }
}
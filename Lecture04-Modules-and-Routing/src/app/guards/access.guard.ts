import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private rooter:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const result= false;
    if(!result){
      //this.rooter.navigate(['/'])
      this.rooter.navigateByUrl(this.rooter.url === 'about' ? '/' : this.rooter.url) //bertter
    }
    return result;
  }
  
}

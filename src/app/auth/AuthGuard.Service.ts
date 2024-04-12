import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("usuario: "+this.authService.currentUserSig())
        if(this.authService.currentUserSig()){
            return true;
        } else {
            this.router.navigate(['/login']);
            return false
        }

    }
    
}
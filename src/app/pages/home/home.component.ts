import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { faCoffee  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  faCoffe = faCoffee ;

  constructor( private authService: AuthService, private router: Router){

  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }
}

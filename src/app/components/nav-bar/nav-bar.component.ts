import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {

  constructor(private router: Router){}

  isActive(routePath: string): boolean {
    return this.router.url === routePath;
  }

  // function getActiveRoute() {
  //   // Implement logic to return the active route (e.g., "/home", "/currency")
  // }
  
  // const homeIcon = document.getElementById("homeIcon");
  // const homeLink = document.getElementById("homeLink");
  // const currencyLink = document.getElementById("currencyLink"); // Add similar references for other links
  
  // const activeRoute = getActiveRoute();
  
  // if (activeRoute === "/home") {
  //   homeIcon.classList.add("text-finPurple");
  // } else {
  //   homeIcon.classList.remove("text-finPurple");
  // }
}

import { Routes } from '@angular/router';
import { AuthenticantionComponent } from './pages/authenticantion/authenticantion.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/AuthGuard.Service';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: AuthenticantionComponent },
    { path: 'register', component: RegisterComponent },
    // {path: 'home', component: HomeComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
];

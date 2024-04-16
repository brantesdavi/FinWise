import { Routes } from '@angular/router';
import { AuthenticantionComponent } from './pages/authenticantion/authenticantion.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/AuthGuard.Service';
import { RegisterComponent } from './pages/register/register.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { UserComponent } from './pages/user/user.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: AuthenticantionComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'home', component: HomeComponent},
    {path: 'transactions/create', component: CreateTransactionComponent},
    {path: 'user', component: UserComponent},
    {path: 'analytics', component: AnalyticsComponent},
    // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
];

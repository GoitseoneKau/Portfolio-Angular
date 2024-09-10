import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"About",component:AboutComponent},
    {path:"Projects",component:PortfolioComponent},
    {path:"Contact",component:ContactComponent}
];
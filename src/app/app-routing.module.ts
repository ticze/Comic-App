import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component'
import { HeroesComponent } from './Components/heroes/heroes.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'heroes', component: HeroesComponent },
  { path:'about', component: AboutComponent },
  { path:'heroe/:id', component: HeroeComponent},
  { path:'buscar/:termino', component: BuscadorComponent},
  { path:'**', pathMatch: 'full', redirectTo:'home' }
];

export const  AppRouting = RouterModule.forRoot(routes);

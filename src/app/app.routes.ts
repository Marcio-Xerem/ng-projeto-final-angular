import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalFactsComponent } from './animal-facts/animal-facts.component';
import { ListaJsonComponent } from './lista-json/lista-json.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'animal-facts', component: AnimalFactsComponent
  },
  {
    path: 'lista', component: ListaJsonComponent
  },
  {
    path: 'cat-details', component: CatDetailsComponent
  },
  {
    path: 'dog-details', component: DogDetailsComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

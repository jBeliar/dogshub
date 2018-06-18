import { Routes } from '@angular/router';
import { DogsComponent } from './components/dogs.component/dogs.component';
import { NewDogComponent } from './components/new.dog.component/new.dog.component';
import { EditDogComponent } from './components/edit.dog.component/edit.dog.component';
import { DogComponent } from './components/dog.component/dog.component';
import { HomeComponent } from './components/home.component/home.component';


export const appRoutes: Routes = [
  { component: HomeComponent, path: '' },
  { path: 'dogs',
    component: DogsComponent,
  },
  { path: 'dogs/new', component: NewDogComponent },
  { path: 'dogs/edit/:id', component: EditDogComponent },
  { path: 'dogs/:id',      component: DogComponent },
  { path: '**', component: HomeComponent, redirectTo: '' }
];
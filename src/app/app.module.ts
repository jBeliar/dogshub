import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewDogComponent } from './components/new.dog.component/new.dog.component';
import { DogsComponent } from './components/dogs.component/dogs.component';
import { HomeComponent } from './components/home.component/home.component';
import { EditDogComponent } from './components/edit.dog.component/edit.dog.component';
import { DogComponent } from './components/dog.component/dog.component';
import { PersistanceService } from './services/persistance.service';

const appRoutes: Routes = [
  { path: 'dogs',
    component: DogsComponent,
  },
  { path: 'dogs/new', component: NewDogComponent },
  { path: 'dogs/edit/:id', component: EditDogComponent },
  { path: 'dogs/:id',      component: DogComponent },
  { path: '**', component: HomeComponent }
];

const Routes = RouterModule.forRoot(
  appRoutes
)

@NgModule({
  declarations: [
    AppComponent,
    NewDogComponent,
    DogsComponent,
    HomeComponent,
    EditDogComponent,
    DogComponent
  ],
  imports: [
    Routes,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    PersistanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

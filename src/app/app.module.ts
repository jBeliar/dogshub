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
import { MatTableModule, MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatMenuModule } from '@angular/material';
import { UtilsService } from './services/utils.service';
import { NotifierService } from './services/notifier.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { appRoutes } from './app.routs';
import { DeleteDogBtnComponent } from './components/delete.dog.btn.component/delete.dog.btn.component';

const Routes = RouterModule.forRoot(
  appRoutes
)

const AngularMaterialModules = [
  MatTableModule,
  MatButtonModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule
]

@NgModule({
  declarations: [
    AppComponent,
    NewDogComponent,
    DogsComponent,
    HomeComponent,
    EditDogComponent,
    DogComponent,
    DeleteDogBtnComponent
  ],
  imports: [
    Routes,
    BrowserModule,
    BrowserAnimationsModule,
    ...AngularMaterialModules,
    FormsModule,  
    ReactiveFormsModule
  ],
  providers: [
    PersistanceService,
    UtilsService,
    NotifierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

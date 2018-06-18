import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { PersistanceService } from '../../services/persistance.service';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';
import { NotifierService } from '../../services/notifier.service';

@Component({
  selector: 'dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

  displayedColumns = ['id', 'name', 'age', 'breed', 'actions'];

  dogs: any[]
  breedDitionary: any[]
  dataSource: MatTableDataSource<DogModel>;
  loading = true;

  constructor(
    private router: Router,
    private persistanceService: PersistanceService,
    private utilsService: UtilsService,
    private notifierService: NotifierService
  ) {
    this.loadDogsAndDictionaries()
  }

  async loadDogsAndDictionaries() {
    this.breedDitionary = await this.persistanceService.getBreedDictionary()
    const dogs = await this.persistanceService.getDogs()
    this.reload(dogs)
    this.loading = false
  }

  editDog(dog: any) {
    this.router.navigate(['dogs', 'edit', dog.id]);
  }

  reload(dogs: any[]) {
    this.dataSource = new MatTableDataSource<DogModel>(dogs);
  }

  deleteDog(id: number) {
    this.persistanceService.deleteDog(id)
      .then(dogs => {
        this.notifierService.notify('Dog has been deleted')
        this.reload(dogs)
      }).catch(() => {
        this.notifierService.notify('Error while deleting dog')
      })
  }

  convertFromIdToBreed(id: number) {
    return this.utilsService.getDictionaryValue(this.breedDitionary, id)
  }
}

export interface DogModel {
  id: number;
  name: string;
  age: number;
  breed: number;
}

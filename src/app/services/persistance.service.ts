import { Injectable } from '@angular/core';

const dogsMock = [
  { id: 0, name: 'Dog1', age: 5, breed: 3},
  { id: 1, name: 'Dog2', age: 15, breed: 1},
  { id: 2, name: 'Dog3', age: 3, breed: 1},
  { id: 3, name: 'Dog4', age: 8, breed: 2}
];
const breedsMock = [
  {value: 'Alaskan husky', id: 0},
  {value: 'Barbet', id: 1},
  {value: 'Chinook', id: 2},
  {value: 'Cursinu', id: 3},
  {value: 'Vizsla', id: 4}
]

const DOGS = '__dogs'

@Injectable()
export class PersistanceService {
  private dogs: any[];

  constructor() {
    let stringifyJSONDogs = localStorage.getItem(DOGS);
    try {
      const maybyJSON = JSON.parse(stringifyJSONDogs)
      this.dogs = maybyJSON ? maybyJSON : dogsMock
    } catch (e) {
      this.dogs = dogsMock
    }
  }

  getDogs() {
    return this.dogs
  }

  getBreedDictionary() {
    return breedsMock
  }

  addNewDog(dogModel: any) {
    this.dogs = [...this.dogs, dogModel]
    const stringifyJSONDogs = JSON.stringify(this.dogs)
    localStorage.setItem(DOGS, stringifyJSONDogs)
  }

  deleteDog(id: number) {
    return Promise.resolve()
      .then(() => {
        const dogs = this.dogs.filter(dog => dog.id !== id)
        const stringifyJSONDogs = JSON.stringify(dogs)
        localStorage.setItem(DOGS, stringifyJSONDogs)
        return dogs
      })
  }
}
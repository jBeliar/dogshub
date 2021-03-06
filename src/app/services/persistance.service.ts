import { Injectable } from '@angular/core';

const dogsMock = [
  { id: 0, name: 'Dog001', age: 5, breed: 3},
  { id: 1, name: 'Dog002', age: 15, breed: 1},
  { id: 2, name: 'Dog003', age: 3, breed: 1},
  { id: 3, name: 'Dog004', age: 8, breed: 2}
];
const breedsMock = [
  {value: 'Alaskan husky', id: 0},
  {value: 'Barbet', id: 1},
  {value: 'Chinook', id: 2},
  {value: 'Cursinu', id: 3},
  {value: 'Vizsla', id: 4}
]

const DOGS = '__dogs'
const delay = 1000

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
    return new Promise<any[]>(resolve => {
      setTimeout(() => resolve(this.dogs), delay);
    })
  }

  getBreedDictionary() {
    return breedsMock
  }

  addNewDog(dogModel: any) {
    const id = this.dogs.reduce( (acc, dog) => dog.id>acc?dog.id:acc, 0) + 1
    const dog = {id, ...dogModel}
    this.dogs = [...this.dogs, dog]
    this.saveInDB()
    return Promise.resolve()
      .then(() => {
        return this.dogs
      })
  }

  editDog(id: number, dogModel: any) {
    const dogs = this.dogs.filter(dog => dog.id !== id)
    const dog = {id, ...dogModel}
    this.dogs = [...dogs, dog]
    this.saveInDB()
    return Promise.resolve()
      .then(() => this.dogs)
  }

  getDog(id: number) {
    return this.dogs.find(dog => id == dog.id)
  }

  deleteDog(id: number) {
    this.dogs = this.dogs.filter(dog => dog.id !== id)
    this.saveInDB()
    return Promise.resolve()
      .then(() => this.dogs)
  }

  private saveInDB() {
    const stringifyJSONDogs = JSON.stringify(this.dogs)
    localStorage.setItem(DOGS, stringifyJSONDogs)
  }
}
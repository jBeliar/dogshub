import { Injectable } from '@angular/core';

const dogsMock = ["dog1", "dog2"];

@Injectable()
export class PersistanceService {
  private dogs: any[];

  constructor() {
    let stringifyJSONDogs = localStorage.getItem("__dogs");
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

  addNewDog(dogModel: any) {
    this.dogs = [...this.dogs, dogModel]
    const stringifyJSONDogs = JSON.stringify(this.dogs)
    localStorage.setItem("__dogs", stringifyJSONDogs)
  }
}
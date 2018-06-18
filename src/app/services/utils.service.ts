import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  getDictionaryValue(dictionary: any[], id: number) {
    return dictionary.find(breed => breed.id === id).value
  }
}
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { PersistanceService } from '../services/persistance.service';

export abstract class AbstractDogForm {
  newDogForm: FormGroup;
  breedDic: { value: string; id: number; }[];
  constructor(
    fb: FormBuilder,
    protected persistanceService: PersistanceService,
    protected router: Router
  ) {
    this.breedDic = persistanceService.getBreedDictionary()
    this.newDogForm = fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z ]+$/)
        ])
      ],
      age: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(30)
        ])
      ],
      breed: [
        null,
        Validators.required
      ],
    });
  }

  abstract onSubmit(dogModel): void;
}

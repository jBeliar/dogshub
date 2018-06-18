import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { PersistanceService } from '../../services/persistance.service';
import { NotifierService } from '../../services/notifier.service';
import { Router } from '@angular/router';

@Component({
  selector: "new-dog",
  templateUrl: "./new.dog.component.html",
  styleUrls: ["./new.dog.component.css"]
})
export class NewDogComponent {
  newDogForm: any;
  breedDic: { value: string; id: number; }[];
  constructor(
    fb: FormBuilder,
    private persistanceService: PersistanceService,
    private notifierService: NotifierService,
    private router: Router
  ) {
    this.breedDic = persistanceService.getBreedDictionary()
    this.newDogForm = fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
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

  onSubmit(dogModel) {
    this.persistanceService.addNewDog(dogModel)
      .then(() => {
        this.notifierService.notify('New dog has been added')
        this.router.navigate(['dogs'])
      }).catch(() => {
        this.notifierService.notify('Error while adding new dog')
      })
  }
}

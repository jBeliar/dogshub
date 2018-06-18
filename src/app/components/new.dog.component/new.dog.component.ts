import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { PersistanceService } from '../../services/persistance.service';
import { NotifierService } from '../../services/notifier.service';
import { Router } from '@angular/router';
import { AbstractDogForm } from '../../abstracts/abstract.dog.form';

@Component({
  selector: "new-dog",
  templateUrl: "./new.dog.component.html",
  styleUrls: ["./new.dog.component.css"]
})
export class NewDogComponent extends AbstractDogForm {
  constructor(
    fb: FormBuilder,
    protected persistanceService: PersistanceService,
    protected router: Router,
    protected notifierService: NotifierService
  ) {
    super(fb,persistanceService,router)
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

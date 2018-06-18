import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersistanceService } from '../../services/persistance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from '../../services/notifier.service';
import { AbstractDogForm } from '../../abstracts/abstract.dog.form';

@Component({
  selector: 'edit-dog',
  templateUrl: '../../templates/dog.form.template.html',
  styleUrls: ['./edit.dog.component.css']
})
export class EditDogComponent extends AbstractDogForm {

  actionName = "Save"

  dogId: number;
  constructor(
    fb: FormBuilder,
    protected persistanceService: PersistanceService,
    protected router: Router,
    protected notifierService: NotifierService,
    activatedRoute: ActivatedRoute
  ) {
    super(fb,persistanceService,router)
    this.dogId = null
    activatedRoute.params.subscribe(params => {
      this.dogId = params['id'];
      const dog = persistanceService.getDog(this.dogId)
      const { id, ...dogFormValue } = dog
      this.newDogForm.setValue(dogFormValue)
      this.newDogForm.updateValueAndValidity()
  });
  }

  onSubmit(dogModel) {
    if (this.dogId === null) {
      return
    }
    this.persistanceService.editDog(this.dogId, dogModel)
      .then(() => {
        this.notifierService.notify('New dog has been edited')
        this.router.navigate(['dogs'])
      }).catch(() => {
        this.notifierService.notify('Error while editing dog')
      })
  }
}

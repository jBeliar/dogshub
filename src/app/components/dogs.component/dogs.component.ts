import { Component } from '@angular/core';
import { PersistanceService } from '../../services/persistance.service';

@Component({
  selector: 'dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  
  constructor(private persistanceService: PersistanceService) {
    console.log(this.persistanceService.getDogs())
  }
}

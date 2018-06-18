import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'delete-dog-btn',
  templateUrl: './delete.dog.btn.component.html'
})
export class DeleteDogBtnComponent {

  @Input() id: number;
  @Output() onDelete = new EventEmitter<any>();

  constructor() {}


  @Output()
  onDeleteAction() {
    this.onDelete.emit(this.id)
  }
  
}

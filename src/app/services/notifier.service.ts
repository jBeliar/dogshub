import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotifierService {

  constructor(
    private snackBar: MatSnackBar
  ){}
  
  notify(message: string) {
    this.snackBar.open(message)
  }
}
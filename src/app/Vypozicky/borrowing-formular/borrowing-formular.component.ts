import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {FormControl, FormGroup} from "@angular/forms";
import {Borrowing} from "../../models/borrowing.model";

@Component({
  selector: 'app-borrowing-formular',
  templateUrl: './borrowing-formular.component.html',
  styleUrls: ['./borrowing-formular.component.css']
})
export class BorrowingFormularComponent{

  @Input()
  set borrowing(data: Borrowing) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajBorrowing = new EventEmitter<Borrowing>();

  @Output()
  upravBorrowing = new EventEmitter<Borrowing>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      borrowingId: new FormControl(null),
      carId: new FormControl(null),
      customerId: new FormControl(null),
      borrowingStartDate: new FormControl(null),
      borrowingEndDate: new FormControl(null),

    });
  }

  private naplnForm(borrowing: Borrowing): void {
    this.form.controls['borrowingId'].setValue(borrowing.borrowingId);
    this.form.controls["carId"].setValue(borrowing.carId);
    this.form.controls["customerId"].setValue(borrowing.customerId);
    this.form.controls["borrowingStartDate"].setValue(borrowing.borrowingStartDate);
    this.form.controls["borrowingEndDate"].setValue(borrowing.borrowingEndDate);

  }

  public pridaj(): void {
    this.pridajBorrowing.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravBorrowing.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-formular',
  templateUrl: './customers-formular.component.html',
  styleUrls: ['./customers-formular.component.css']
})
export class CustomersFormularComponent {

  @Input()
  set customer(data: Customer) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajCustomera = new EventEmitter<Customer>();

  @Output()
  upravCustomera = new EventEmitter<Customer>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      customer_id: new FormControl(null),
      identification_number: new FormControl(null),
      customer_firstname: new FormControl(null),
      customer_lastname: new FormControl(null),
      o_number: new FormControl(null),

    });
  }

  private naplnForm(customer: Customer): void {
    this.form.controls['customer_id'].setValue(customer.customer_id);
    this.form.controls["identification_number"].setValue(customer.identification_number);
    this.form.controls["customer_firstname"].setValue(customer.customer_firstname);
    this.form.controls["customer_lastname"].setValue(customer.customer_lastname);
    this.form.controls["o_number"].setValue(customer.o_number);

  }

  public pridaj(): void {
    this.pridajCustomera.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravCustomera.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }

}

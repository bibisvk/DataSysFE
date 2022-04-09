import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerZoznam} from "../models/customer.model";

@Component({
  selector: 'app-customers-zoznam',
  templateUrl: './customers-zoznam.component.html',
  styleUrls: ['./customers-zoznam.component.css']
})
export class CustomersZoznamComponent{

  @Input()
  customers: CustomerZoznam[] = [];

  @Output()
  upravCustomera: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazCustomera: EventEmitter<number> = new EventEmitter<number>();


  uprav(customerId: number): void {
    this.upravCustomera.emit(customerId);
  }

  zmaz(customerId: number): void {
    this.zmazCustomera.emit(customerId);
  }

}

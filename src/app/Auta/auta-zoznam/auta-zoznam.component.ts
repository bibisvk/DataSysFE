import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AutoZoznam} from "../../models/auto.model";

@Component({
  selector: 'app-auta-zoznam',
  templateUrl: './auta-zoznam.component.html',
  styleUrls: ['./auta-zoznam.component.css']
})
export class AutaZoznamComponent{

  @Input()
  auta: AutoZoznam[] = [];

  @Output()
  upravAuto: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazAuto: EventEmitter<number> = new EventEmitter<number>();


  uprav(autoId: number): void {
    this.upravAuto.emit(autoId);
  }

  zmaz(autoId: number): void {
    this.zmazAuto.emit(autoId);
  }

}

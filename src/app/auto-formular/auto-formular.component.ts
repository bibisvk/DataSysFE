import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Auto} from "../models/auto.model";

@Component({
  selector: 'app-auto-formular',
  templateUrl: './auto-formular.component.html',
  styleUrls: ['./auto-formular.component.css']
})
export class AutoFormularComponent {

  @Input()
  set auto(data: Auto) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajAuto = new EventEmitter<Auto>();

  @Output()
  upravAuto = new EventEmitter<Auto>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      cena: new FormControl(null),
      dvere: new FormControl(null),
      osoby: new FormControl(null),
      kufor: new FormControl(null),
      bezpecnost: new FormControl(null),

    });
  }

  private naplnForm(auto: Auto): void {
    this.form.controls['id'].setValue(auto.id);
    this.form.controls["cena"].setValue(auto.cena);
    this.form.controls["dvere"].setValue(auto.dvere);
    this.form.controls["osoby"].setValue(auto.osoby);
    this.form.controls["kufor"].setValue(auto.kufor);
    this.form.controls["bezpecnost"].setValue(auto.bezpecnost);

  }

  public pridaj(): void {
    this.pridajAuto.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravAuto.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BorrowingZoznam} from "../../models/borrowing.model";

@Component({
  selector: 'app-borrowing-zoznam',
  templateUrl: './borrowing-zoznam.component.html',
  styleUrls: ['./borrowing-zoznam.component.css']
})
export class BorrowingZoznamComponent {

  term!: string;


  @Input()
  borrowings: BorrowingZoznam[] = [];

  @Output()
  upravBorrowing: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazBorrowing: EventEmitter<number> = new EventEmitter<number>();


  uprav(borrowingId: number): void {
    this.upravBorrowing.emit(borrowingId);
  }

  zmaz(borrowingId: number): void {
    this.zmazBorrowing.emit(borrowingId);
  }

}

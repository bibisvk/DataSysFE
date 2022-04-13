import { Component, OnInit } from '@angular/core';
import {Borrowing, BorrowingZoznam} from "../../models/borrowing.model";
import {Router} from "@angular/router";
import {BorrowingServiceService} from "../../../Services/borrowing-service.service";

@Component({
  selector: 'app-borrowing-stranka',
  templateUrl: './borrowing-stranka.component.html',
  styleUrls: ['./borrowing-stranka.component.css']
})
export class BorrowingStrankaComponent implements OnInit {


  borrowings: BorrowingZoznam[] = [];

  borrowingNaUpravu?: Borrowing;

  constructor(private router: Router, private borrowingService: BorrowingServiceService) { }

  ngOnInit(): void {
    this.refreshBorrowings();
  }

  refreshBorrowings(): void {
    this.borrowingService.getBorrowings().subscribe(data => {
      console.log('prislo:', data);
      this.borrowings = data;
    });
  }

  exportBorrowings(): void{
    this.borrowingService.exportBorrowing().subscribe(x =>{
      const blob = new Blob([x], {type: 'application/pdf'});
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'borrowings.pdf';
      link.dispatchEvent(new MouseEvent('click'));
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(borrowing: Borrowing): void {
    this.borrowingService.createBorrowing(borrowing).subscribe(data => {
      console.log('prislo:', data);
      this.refreshBorrowings();
    });
  }
  uprav(borrowing: Borrowing): void {
    if (borrowing.borrowingId !== undefined) {
      this.borrowingService.updateBorrowing(borrowing.borrowingId, borrowing).subscribe(data => {
        console.log('prislo:', data);
        this.refreshBorrowings();
      });
    }
  }

  upravZoZoznamu(borrowingId: number): void {
    this.borrowingService.getBorrowing(borrowingId).subscribe(data => {
      console.log('prislo:', data);
      this.borrowingNaUpravu = data;
    });
  }

  zmazZoZoznamu(borrowingId: number): void {
    this.borrowingService.deleteBorrowing(borrowingId).subscribe(data => {
      this.refreshBorrowings();
    });
  }


}

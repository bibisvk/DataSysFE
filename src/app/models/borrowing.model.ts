export class Borrowing {
  borrowingId?: number;
  carId: number;
  customerId: number;
  borrowingStartDate: Date;
  borrowingEndDate: Date;

  constructor(borrowing: Borrowing) {
    this.borrowingId = borrowing.borrowingId;
    this.carId = borrowing.carId;
    this.customerId = borrowing.customerId;
    this.borrowingStartDate = borrowing.borrowingStartDate;
    this.borrowingEndDate = borrowing.borrowingEndDate;
  }
}

export class BorrowingZoznam {
  borrowingId?: number;
  carId: number;
  customerId: number;
  borrowingStartDate: Date;
  borrowingEndDate: Date;

  constructor(borrowing: Borrowing) {
    this.borrowingId = borrowing.borrowingId;
    this.carId = borrowing.carId;
    this.customerId = borrowing.customerId;
    this.borrowingStartDate = borrowing.borrowingStartDate;
    this.borrowingEndDate = borrowing.borrowingEndDate;
  }
}

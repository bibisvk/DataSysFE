import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Borrowing, BorrowingZoznam} from "../app/models/borrowing.model";

@Injectable({
  providedIn: 'root'
})
export class BorrowingServiceService {
  private apiUrl = 'http://localhost:8080/api/borrowings';

  constructor(private http: HttpClient) { }

  getBorrowings(): Observable<BorrowingZoznam[]> {
    return this.http.get<BorrowingZoznam[]>(`${this.apiUrl}`);
  }

  getBorrowing(borrowingId: number): Observable<Borrowing> {
    return this.http.get<Borrowing>(`${this.apiUrl}/${borrowingId}`);
  }

  updateBorrowing(borrowingId: number, borrowing: Borrowing): Observable<Borrowing> {
    return this.http.put<Borrowing>(`${this.apiUrl}/${borrowingId}`, {borrowingId: borrowing.borrowingId, carId: borrowing.carId, customerId: borrowing.customerId, borrowingStartDate: borrowing.borrowingStartDate,
      borrowingEndDate: borrowing.borrowingEndDate});
  }

  createBorrowing(borrowing: Borrowing): Observable<Borrowing> {
    return this.http.post<Borrowing>(`${this.apiUrl}`, {borrowingId: borrowing.borrowingId, carId: borrowing.carId, customerId: borrowing.customerId, borrowingStartDate: borrowing.borrowingStartDate,
      borrowingEndDate: borrowing.borrowingEndDate});
  }

  deleteBorrowing(borrowingId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${borrowingId}`);
  }

  exportBorrowing(): Observable<Blob>{
    return this.http.get(`${this.apiUrl}/pdf`,{responseType:'blob'});
  }
}

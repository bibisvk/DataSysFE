import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer, CustomerZoznam} from "../app/models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<CustomerZoznam[]> {
    return this.http.get<CustomerZoznam[]>(`${this.apiUrl}`);
  }

  getCustomer(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${customerId}`);
  }

  updateCustomer(customerId: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${customerId}`, {customer_id: customer.customer_id, identification_number: customer.identification_number, customer_firstname: customer.customer_firstname, customer_lastname: customer.customer_lastname,
      o_number: customer.o_number});
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}`, {customer_id: customer.customer_id, identification_number: customer.identification_number, customer_firstname: customer.customer_firstname, customer_lastname: customer.customer_lastname,
      o_number: customer.o_number});
  }

  deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${customerId}`);
  }

  exportCustomer(): Observable<Blob>{
    return this.http.get(`${this.apiUrl}/pdf`,{responseType:'blob'});
  }
}

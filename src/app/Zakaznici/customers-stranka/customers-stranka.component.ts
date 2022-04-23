import { Component, OnInit } from '@angular/core';
import {Customer, CustomerZoznam} from "../../models/customer.model";
import {Router} from "@angular/router";
import {CustomerServiceService} from "../../../Services/customer-service.service";
enum MENU { OSOBY, AUTA, VYPOZICKY }
@Component({
  selector: 'app-customer-stranka',
  templateUrl: './customers-stranka.component.html',
  styleUrls: ['./customers-stranka.component.css']
})
export class CustomersStrankaComponent implements OnInit {

  customers: CustomerZoznam[] = [];

  customerNaUpravu?: Customer;


  menu = MENU;

  constructor(private router: Router, private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.refreshCustomerov();
  }

  refreshCustomerov(): void {
    this.customerService.getCustomers().subscribe(data => {
      console.log('prislo:', data);
      this.customers = data;
    });
  }

  exportCustomerov(): void{
    this.customerService.exportCustomer().subscribe(x =>{
      const blob = new Blob([x], {type: 'application/pdf'});
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'customers.pdf';
      link.dispatchEvent(new MouseEvent('click'));
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(customer: Customer): void {
    this.customerService.createCustomer(customer).subscribe(data => {
      console.log('prislo:', data);
      this.refreshCustomerov();
    });
  }
  uprav(customer: Customer): void {
    if (customer.customer_id !== undefined) {
      this.customerService.updateCustomer(customer.customer_id, customer).subscribe(data => {
        console.log('prislo:', data);
        this.refreshCustomerov();
      });
    }
  }

  upravZoZoznamu(customerId: number): void {
    this.customerService.getCustomer(customerId).subscribe(data => {
      console.log('prislo:', data);
      this.customerNaUpravu = data;
    });
  }

  zmazZoZoznamu(customerId: number): void {
    this.customerService.deleteCustomer(customerId).subscribe(data => {
      this.refreshCustomerov();
    });
  }
  otvorMenu(m: MENU) {
    if (m === MENU.OSOBY) {
      this.router.navigate(['/customer']);
    }
    if (m === MENU.AUTA) {
      this.router.navigate(['/auto']);
    }
    if (m === MENU.VYPOZICKY) {
      this.router.navigate(['/borrowing']);
    }
  }

}

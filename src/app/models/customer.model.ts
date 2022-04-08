export class Customer {
  customer_id?: number;
  identification_number: string;
  customer_firstname: number;
  customer_lastname: number;
  o_number: string;

  constructor(customer: Customer) {
    this.customer_id = customer.customer_id;
    this.identification_number = customer.identification_number;
    this.customer_firstname = customer.customer_firstname;
    this.customer_lastname = customer.customer_lastname;
    this.o_number = customer.o_number;

  }
}

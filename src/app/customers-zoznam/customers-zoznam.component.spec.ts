import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersZoznamComponent } from './customers-zoznam.component';

describe('CustomersZoznamComponent', () => {
  let component: CustomersZoznamComponent;
  let fixture: ComponentFixture<CustomersZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

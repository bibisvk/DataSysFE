import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersFormularComponent } from './customers-formular.component';

describe('CustomersFormularComponent', () => {
  let component: CustomersFormularComponent;
  let fixture: ComponentFixture<CustomersFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

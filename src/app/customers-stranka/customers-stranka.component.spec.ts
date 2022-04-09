import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersStrankaComponent } from './customers-stranka.component';

describe('CustomersStrankaComponent', () => {
  let component: CustomersStrankaComponent;
  let fixture: ComponentFixture<CustomersStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

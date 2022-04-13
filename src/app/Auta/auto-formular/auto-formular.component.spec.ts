import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFormularComponent } from './auto-formular.component';

describe('AutoFormularComponent', () => {
  let component: AutoFormularComponent;
  let fixture: ComponentFixture<AutoFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

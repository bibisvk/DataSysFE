import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoStrankaComponent } from './auto-stranka.component';

describe('AutoStrankaComponent', () => {
  let component: AutoStrankaComponent;
  let fixture: ComponentFixture<AutoStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

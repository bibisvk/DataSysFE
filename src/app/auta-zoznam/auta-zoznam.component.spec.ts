import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutaZoznamComponent } from './auta-zoznam.component';

describe('AutaZoznamComponent', () => {
  let component: AutaZoznamComponent;
  let fixture: ComponentFixture<AutaZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutaZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutaZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatudComponent } from './statud.component';

describe('StatudComponent', () => {
  let component: StatudComponent;
  let fixture: ComponentFixture<StatudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

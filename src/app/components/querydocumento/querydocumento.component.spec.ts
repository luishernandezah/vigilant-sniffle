import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerydocumentoComponent } from './querydocumento.component';

describe('QuerydocumentoComponent', () => {
  let component: QuerydocumentoComponent;
  let fixture: ComponentFixture<QuerydocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerydocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerydocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

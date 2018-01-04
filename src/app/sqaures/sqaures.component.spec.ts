import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqauresComponent } from './sqaures.component';

describe('SqauresComponent', () => {
  let component: SqauresComponent;
  let fixture: ComponentFixture<SqauresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqauresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqauresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

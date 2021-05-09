import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliticsSelectComponent } from './analitics-select.component';

describe('AnaliticsSelectComponent', () => {
  let component: AnaliticsSelectComponent;
  let fixture: ComponentFixture<AnaliticsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaliticsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliticsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTypesMainComponent } from './chart-types-main.component';

describe('ChartTypesMainComponent', () => {
  let component: ChartTypesMainComponent;
  let fixture: ComponentFixture<ChartTypesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTypesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTypesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

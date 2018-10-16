import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTypesDocsComponent } from './chart-types-docs.component';

describe('ChartTypesDocsComponent', () => {
  let component: ChartTypesDocsComponent;
  let fixture: ComponentFixture<ChartTypesDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTypesDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTypesDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

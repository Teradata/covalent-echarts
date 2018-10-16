import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDocsComponent } from './line-docs.component';

describe('LineDocsComponent', () => {
  let component: LineDocsComponent;
  let fixture: ComponentFixture<LineDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

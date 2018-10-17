import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterDocsComponent } from './scatter-docs.component';

describe('ScatterDocsComponent', () => {
  let component: ScatterDocsComponent;
  let fixture: ComponentFixture<ScatterDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterDocsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

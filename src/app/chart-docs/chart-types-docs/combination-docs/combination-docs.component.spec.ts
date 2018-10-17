import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationDocsComponent } from './combination-docs.component';

describe('CombinationDocsComponent', () => {
  let component: CombinationDocsComponent;
  let fixture: ComponentFixture<CombinationDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinationDocsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

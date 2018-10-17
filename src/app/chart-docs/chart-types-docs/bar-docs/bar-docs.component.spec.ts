import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDocsComponent } from './bar-docs.component';

describe('BarDocsComponent', () => {
  let component: BarDocsComponent;
  let fixture: ComponentFixture<BarDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarDocsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

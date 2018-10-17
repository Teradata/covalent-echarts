import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDocsComponent } from './tree-docs.component';

describe('TreeDocsComponent', () => {
  let component: TreeDocsComponent;
  let fixture: ComponentFixture<TreeDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDocsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

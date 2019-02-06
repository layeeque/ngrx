import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectoruseComponent } from './selectoruse.component';

describe('SelectoruseComponent', () => {
  let component: SelectoruseComponent;
  let fixture: ComponentFixture<SelectoruseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectoruseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectoruseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

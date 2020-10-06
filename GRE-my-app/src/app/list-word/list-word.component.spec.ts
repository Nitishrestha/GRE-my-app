import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWordComponent } from './list-word.component';

describe('ListWordComponent', () => {
  let component: ListWordComponent;
  let fixture: ComponentFixture<ListWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

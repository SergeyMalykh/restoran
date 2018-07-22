import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlFornelloComponent } from './il-fornello.component';

describe('IlFornelloComponent', () => {
  let component: IlFornelloComponent;
  let fixture: ComponentFixture<IlFornelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlFornelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlFornelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

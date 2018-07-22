import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlFornelloContactComponent } from './il-fornello-contact.component';

describe('IlFornelloContactComponent', () => {
  let component: IlFornelloContactComponent;
  let fixture: ComponentFixture<IlFornelloContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlFornelloContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlFornelloContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

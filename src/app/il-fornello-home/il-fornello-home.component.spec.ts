import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlFornelloHomeComponent } from './il-fornello-home.component';

describe('IlFornelloHomeComponent', () => {
  let component: IlFornelloHomeComponent;
  let fixture: ComponentFixture<IlFornelloHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlFornelloHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlFornelloHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

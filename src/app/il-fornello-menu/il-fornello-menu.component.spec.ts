import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlFornelloMenuComponent } from './il-fornello-menu.component';

describe('IlFornelloMenuComponent', () => {
  let component: IlFornelloMenuComponent;
  let fixture: ComponentFixture<IlFornelloMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlFornelloMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlFornelloMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

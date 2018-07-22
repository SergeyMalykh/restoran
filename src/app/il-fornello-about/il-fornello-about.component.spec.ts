import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlFornelloAboutComponent } from './il-fornello-about.component';

describe('IlFornelloAboutComponent', () => {
  let component: IlFornelloAboutComponent;
  let fixture: ComponentFixture<IlFornelloAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlFornelloAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlFornelloAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

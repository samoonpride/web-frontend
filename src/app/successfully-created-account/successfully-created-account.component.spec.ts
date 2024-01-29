import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyCreatedAccountComponent } from './successfully-created-account.component';

describe('SuccessfullyCreatedAccountComponent', () => {
  let component: SuccessfullyCreatedAccountComponent;
  let fixture: ComponentFixture<SuccessfullyCreatedAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessfullyCreatedAccountComponent]
    });
    fixture = TestBed.createComponent(SuccessfullyCreatedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

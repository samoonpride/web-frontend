import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveUserModalComponent } from './approve-user-modal.component';

describe('ApproveUserModalComponent', () => {
  let component: ApproveUserModalComponent;
  let fixture: ComponentFixture<ApproveUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveUserModalComponent]
    });
    fixture = TestBed.createComponent(ApproveUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

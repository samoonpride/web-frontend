import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyUserModalComponent } from './deny-user-modal.component';

describe('DenyUserModalComponent', () => {
  let component: DenyUserModalComponent;
  let fixture: ComponentFixture<DenyUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DenyUserModalComponent]
    });
    fixture = TestBed.createComponent(DenyUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

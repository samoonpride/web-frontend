import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailModalComponent } from './issue-detail-modal.component';

describe('IssueDetailModalComponent', () => {
  let component: IssueDetailModalComponent;
  let fixture: ComponentFixture<IssueDetailModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueDetailModalComponent]
    });
    fixture = TestBed.createComponent(IssueDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

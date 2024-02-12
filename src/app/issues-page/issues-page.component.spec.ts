import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesPageComponent } from './issues-page.component';

describe('IssuesPageComponent', () => {
  let component: IssuesPageComponent;
  let fixture: ComponentFixture<IssuesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesPageComponent]
    });
    fixture = TestBed.createComponent(IssuesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

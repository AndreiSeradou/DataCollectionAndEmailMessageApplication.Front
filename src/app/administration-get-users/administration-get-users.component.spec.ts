import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationGetUsersComponent } from './administration-get-users.component';

describe('AdministrationGetUsersComponent', () => {
  let component: AdministrationGetUsersComponent;
  let fixture: ComponentFixture<AdministrationGetUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationGetUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationGetUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

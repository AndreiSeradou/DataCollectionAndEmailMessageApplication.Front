import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateSubscriptionComponent } from './user-update-subscription.component';

describe('UserUpdateSubscriptionComponent', () => {
  let component: UserUpdateSubscriptionComponent;
  let fixture: ComponentFixture<UserUpdateSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

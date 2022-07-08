import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateSubscriptionComponent } from './user-create-subscription.component';

describe('UserCreateSubscriptionComponent', () => {
  let component: UserCreateSubscriptionComponent;
  let fixture: ComponentFixture<UserCreateSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

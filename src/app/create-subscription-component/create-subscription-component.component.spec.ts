import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubscriptionComponentComponent } from './create-subscription-component.component';

describe('CreateSubscriptionComponentComponent', () => {
  let component: CreateSubscriptionComponentComponent;
  let fixture: ComponentFixture<CreateSubscriptionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubscriptionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubscriptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

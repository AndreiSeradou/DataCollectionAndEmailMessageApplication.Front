import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubscriptionComponentComponent } from './update-subscription-component.component';

describe('UpdateSubscriptionComponentComponent', () => {
  let component: UpdateSubscriptionComponentComponent;
  let fixture: ComponentFixture<UpdateSubscriptionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubscriptionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSubscriptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

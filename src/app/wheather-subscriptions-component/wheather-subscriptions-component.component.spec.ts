import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherSubscriptionsComponentComponent } from './wheather-subscriptions-component.component';

describe('WheatherSubscriptionsComponentComponent', () => {
  let component: WheatherSubscriptionsComponentComponent;
  let fixture: ComponentFixture<WheatherSubscriptionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheatherSubscriptionsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheatherSubscriptionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

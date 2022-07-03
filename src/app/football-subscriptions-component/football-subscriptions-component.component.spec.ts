import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballSubscriptionsComponentComponent } from './football-subscriptions-component.component';

describe('FootballSubscriptionsComponentComponent', () => {
  let component: FootballSubscriptionsComponentComponent;
  let fixture: ComponentFixture<FootballSubscriptionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballSubscriptionsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballSubscriptionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTranslateSubscriptionsComponentComponent } from './google-translate-subscriptions-component.component';

describe('GoogleTranslateSubscriptionsComponentComponent', () => {
  let component: GoogleTranslateSubscriptionsComponentComponent;
  let fixture: ComponentFixture<GoogleTranslateSubscriptionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleTranslateSubscriptionsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleTranslateSubscriptionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

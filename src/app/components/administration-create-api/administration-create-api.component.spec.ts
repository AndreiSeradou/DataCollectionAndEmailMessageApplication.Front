import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationCreateApiComponent } from './administration-create-api.component';

describe('AdministrationCreateApiComponent', () => {
  let component: AdministrationCreateApiComponent;
  let fixture: ComponentFixture<AdministrationCreateApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationCreateApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationCreateApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

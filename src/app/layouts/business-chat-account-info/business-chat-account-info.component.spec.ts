import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessChatAccountInfoComponent } from './business-chat-account-info.component';

describe('BusinessChatAccountInfoComponent', () => {
  let component: BusinessChatAccountInfoComponent;
  let fixture: ComponentFixture<BusinessChatAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessChatAccountInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessChatAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

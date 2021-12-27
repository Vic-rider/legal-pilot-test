import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureChatInfoComponent } from './secure-chat-info.component';

describe('SecureChatInfoComponent', () => {
  let component: SecureChatInfoComponent;
  let fixture: ComponentFixture<SecureChatInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureChatInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureChatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

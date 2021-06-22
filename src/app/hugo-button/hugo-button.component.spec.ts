import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugoButtonComponent } from './hugo-button.component';

describe('HugoButtonComponent', () => {
  let component: HugoButtonComponent;
  let fixture: ComponentFixture<HugoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HugoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HugoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

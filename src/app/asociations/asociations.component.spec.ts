import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociationsComponent } from './asociations.component';

describe('AsociationsComponent', () => {
  let component: AsociationsComponent;
  let fixture: ComponentFixture<AsociationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociationComponent } from './asociation.component';

describe('AsociationComponent', () => {
  let component: AsociationComponent;
  let fixture: ComponentFixture<AsociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

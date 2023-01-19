import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdlistComponent } from './prdlist.component';

describe('PrdlistComponent', () => {
  let component: PrdlistComponent;
  let fixture: ComponentFixture<PrdlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPaisComponent } from './by-pais.component';

describe('ByPaisComponent', () => {
  let component: ByPaisComponent;
  let fixture: ComponentFixture<ByPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

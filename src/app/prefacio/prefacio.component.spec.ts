import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefacioComponent } from './prefacio.component';

describe('PrefacioComponent', () => {
  let component: PrefacioComponent;
  let fixture: ComponentFixture<PrefacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

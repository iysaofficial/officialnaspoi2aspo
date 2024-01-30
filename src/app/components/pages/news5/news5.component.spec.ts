import { ComponentFixture, TestBed } from '@angular/core/testing';
import { News5Component } from './news5.component';

describe(' News5Component', () => {
  let component:  News5Component;
  let fixture: ComponentFixture< News5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  News5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( News5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

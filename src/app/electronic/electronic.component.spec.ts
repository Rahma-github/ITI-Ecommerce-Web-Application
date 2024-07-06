import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicComponent } from './electronic.component';

describe('ElectronicComponent', () => {
  let component: ElectronicComponent;
  let fixture: ComponentFixture<ElectronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

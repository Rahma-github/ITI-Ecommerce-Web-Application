import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePadgeComponent } from './home-padge.component';

describe('HomePadgeComponent', () => {
  let component: HomePadgeComponent;
  let fixture: ComponentFixture<HomePadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

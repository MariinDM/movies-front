import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeLayout } from './home-layout';

describe('HomeLayout', () => {
  let component: HomeLayout;
  let fixture: ComponentFixture<HomeLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLayout, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

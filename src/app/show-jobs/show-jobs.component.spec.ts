import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJobsComponent } from './show-jobs.component';

describe('ShowJobsComponent', () => {
  let component: ShowJobsComponent;
  let fixture: ComponentFixture<ShowJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

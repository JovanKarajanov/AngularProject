import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDashboardComponent } from './component-dashboard.component';

describe('ComponentDashboardComponent', () => {
  let component: ComponentDashboardComponent;
  let fixture: ComponentFixture<ComponentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

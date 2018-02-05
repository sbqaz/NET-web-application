import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDeploymentComponent } from './single-deployment.component';

describe('SingleDeploymentComponent', () => {
  let component: SingleDeploymentComponent;
  let fixture: ComponentFixture<SingleDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDeploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

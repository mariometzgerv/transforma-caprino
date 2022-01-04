import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGovernanceComponent } from './page-governance.component';

describe('PageGovernanceComponent', () => {
  let component: PageGovernanceComponent;
  let fixture: ComponentFixture<PageGovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGovernanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

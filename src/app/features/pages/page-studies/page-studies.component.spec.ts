import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStudiesComponent } from './page-studies.component';

describe('PageStudiesComponent', () => {
  let component: PageStudiesComponent;
  let fixture: ComponentFixture<PageStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

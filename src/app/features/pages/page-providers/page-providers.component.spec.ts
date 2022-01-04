import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProvidersComponent } from './page-providers.component';

describe('PageProvidersComponent', () => {
  let component: PageProvidersComponent;
  let fixture: ComponentFixture<PageProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

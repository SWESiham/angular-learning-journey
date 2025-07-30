import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksOfITIComponent } from './tracks-of-iti.component';

describe('TracksOfITIComponent', () => {
  let component: TracksOfITIComponent;
  let fixture: ComponentFixture<TracksOfITIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracksOfITIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TracksOfITIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErstelleZutatComponent } from './erstelle-zutat.component';

describe('ErstelleZutatComponent', () => {
  let component: ErstelleZutatComponent;
  let fixture: ComponentFixture<ErstelleZutatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErstelleZutatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErstelleZutatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

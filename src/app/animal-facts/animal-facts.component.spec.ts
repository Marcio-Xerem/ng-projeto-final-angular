import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalFactsComponent } from './animal-facts.component';

describe('AnimalFactsComponent', () => {
  let component: AnimalFactsComponent;
  let fixture: ComponentFixture<AnimalFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalFactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJsonComponent } from './lista-json.component';

describe('ListaJsonComponent', () => {
  let component: ListaJsonComponent;
  let fixture: ComponentFixture<ListaJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

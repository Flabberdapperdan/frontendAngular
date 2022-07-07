import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOverzichtPaginaComponent } from './restaurant-overzicht-pagina.component';

describe('RestaurantOverzichtPaginaComponent', () => {
  let component: RestaurantOverzichtPaginaComponent;
  let fixture: ComponentFixture<RestaurantOverzichtPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantOverzichtPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantOverzichtPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

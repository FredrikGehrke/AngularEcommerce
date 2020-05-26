import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogViewComponent } from './product-catalog-view.component';

describe('ProductCatalogViewComponent', () => {
  let component: ProductCatalogViewComponent;
  let fixture: ComponentFixture<ProductCatalogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCatalogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatalogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

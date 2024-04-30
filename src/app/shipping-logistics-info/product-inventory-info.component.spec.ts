import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInventoryInfoComponent } from './product-inventory-info.component';

describe('ProductInventoryInfoComponent', () => {
  let component: ProductInventoryInfoComponent;
  let fixture: ComponentFixture<ProductInventoryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInventoryInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductInventoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

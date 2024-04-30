import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLogisticsTypeComponent } from './shopping-logistics-type.component';

describe('ShoppingLogisticsTypeComponent', () => {
  let component: ShoppingLogisticsTypeComponent;
  let fixture: ComponentFixture<ShoppingLogisticsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingLogisticsTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingLogisticsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

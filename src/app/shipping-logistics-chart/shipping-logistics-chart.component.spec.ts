import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingLogisticsChartComponent } from './shipping-logistics-chart.component';

describe('ShippingLogisticsChartComponent', () => {
  let component: ShippingLogisticsChartComponent;
  let fixture: ComponentFixture<ShippingLogisticsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingLogisticsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingLogisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

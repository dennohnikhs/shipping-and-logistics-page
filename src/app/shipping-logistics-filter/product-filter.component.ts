import { Component } from "@angular/core";
import { ShoppingLogisticsTypeComponent } from "../shopping-logistics-type/shopping-logistics-type.component";
import { ShippingLogisticsChartComponent } from "../shipping-logistics-chart/shipping-logistics-chart.component";

@Component({
  selector: "app-product-filter",
  standalone: true,
  imports: [ShoppingLogisticsTypeComponent, ShippingLogisticsChartComponent],
  templateUrl: "./product-filter.component.html",
  styleUrl: "./product-filter.component.scss",
})
export class ProductFilterComponent {}

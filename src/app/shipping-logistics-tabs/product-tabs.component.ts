import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductFilterComponent } from "../shipping-logistics-filter/product-filter.component";
import { ProductInventoryComponent } from "../shopping-logistics-data-header/product-inventory.component";
import { ProductInventoryInfoComponent } from "../shipping-logistics-info/product-inventory-info.component";

@Component({
  selector: "app-product-tabs",
  standalone: true,
  imports: [
    ProductFilterComponent,
    ProductInventoryComponent,
    ProductInventoryInfoComponent,
    CommonModule,
  ],
  templateUrl: "./product-tabs.component.html",
  styleUrl: "./product-tabs.component.scss",
})
export class ProductTabsComponent {
  activeTab: string = "shipping-management";

  setTab(tabName: string) {
    this.activeTab = tabName;
  }

  isTabActive(tabName: string) {
    return this.activeTab === tabName;
  }
}

import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductPostComponent } from "./shipping-logistics-header/product-post.component";
import { ProductTabsComponent } from "./shipping-logistics-tabs/product-tabs.component";
import { ProductFilterComponent } from "./shipping-logistics-filter/product-filter.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { SidebarFiltersComponent } from "./shipping-logistics-sidebar/sidebar-filters.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarFiltersComponent,
    ProductPostComponent,
    ProductTabsComponent,
    ProductFilterComponent,
    PaginationComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}

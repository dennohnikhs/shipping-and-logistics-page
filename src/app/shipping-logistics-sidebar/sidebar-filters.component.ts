import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sidebar-filters",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sidebar-filters.component.html",
  styleUrl: "./sidebar-filters.component.scss",
})
export class SidebarFiltersComponent {
  showDropdownLinks = false;
}

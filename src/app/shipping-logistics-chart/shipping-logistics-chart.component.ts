import { Component, OnInit } from "@angular/core";
import Chart from "chart.js/auto";

@Component({
  standalone: true,
  selector: "app-shipping-logistics-chart",
  templateUrl: "./shipping-logistics-chart.component.html",
  styleUrls: ["./shipping-logistics-chart.component.scss"],
})
export class ShippingLogisticsChartComponent implements OnInit {
  chart: any = [];

  ngOnInit() {
    this.chart = new Chart("canvas", {
      type: "bar",
      data: {
        labels: ["1/12", "2/12", "3/12", "4/12", "5/12", "6/12"],
        datasets: [
          {
            label: "# of weights",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

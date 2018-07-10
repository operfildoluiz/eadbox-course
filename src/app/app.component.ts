import { Component, OnInit } from "@angular/core";
import { NgSpinningPreloader } from "ng2-spinning-preloader";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private ngSpinningPreloader: NgSpinningPreloader) {}

  ngOnInit() {
    this.ngSpinningPreloader.stop();
  }
}

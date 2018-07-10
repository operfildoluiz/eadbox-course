import { Component, Input } from "@angular/core";
import { Course } from "./../../course";

@Component({
  selector: "course-features",
  templateUrl: "./course-features.component.html",
  styleUrls: ["./course-features.component.css"]
})
export class CourseFeaturesComponent {
  constructor() {}

  @Input() course: Course;
}

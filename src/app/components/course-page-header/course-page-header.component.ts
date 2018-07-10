import { Course } from "./../../course";
import { Component, Input } from "@angular/core";

@Component({
  selector: "course-page-header",
  templateUrl: "./course-page-header.component.html",
  styleUrls: ["./course-page-header.component.css"]
})
export class CoursePageHeaderComponent {
  constructor() {}

  @Input() course: Course;
}

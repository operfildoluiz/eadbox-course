import { Component, Input } from "@angular/core";
import { Course } from "./../../course";

@Component({
  selector: "course-content",
  templateUrl: "./course-content.component.html",
  styleUrls: ["./course-content.component.css"]
})
export class CourseContentComponent {
  constructor() {}

  @Input() course: Course;
}

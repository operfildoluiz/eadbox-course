import { Component, Input } from "@angular/core";
import { Course } from "./../../course";

@Component({
  selector: "course-about",
  templateUrl: "./course-about.component.html",
  styleUrls: ["./course-about.component.css"]
})
export class CourseAboutComponent {
  constructor() {}

  @Input() course: Course;
}

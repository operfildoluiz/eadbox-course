import { Course } from "./../course";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "course-page-header",
  templateUrl: "./course-page-header.component.html",
  styleUrls: ["./course-page-header.component.css"]
})
export class CoursePageHeaderComponent implements OnInit {
  constructor() {}

  @Input() course: Course;

  ngOnInit() {}
}

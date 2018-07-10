import { Course } from "./../course";
import { Component, Input, LOCALE_ID } from "@angular/core";

@Component({
  selector: "course-page-info",
  templateUrl: "./course-page-info.component.html",
  styleUrls: ["./course-page-info.component.css"],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }]
})
export class CoursePageInfoComponent {
  constructor() {}

  @Input() course: Course;
}

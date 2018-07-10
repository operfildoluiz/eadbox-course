import { Component, Input } from "@angular/core";

@Component({
  selector: "course-lecture-list",
  templateUrl: "./course-lecture-list.component.html",
  styleUrls: ["./course-lecture-list.component.css"]
})
export class CourseLectureListComponent {
  constructor() {}

  @Input() lectures;
}

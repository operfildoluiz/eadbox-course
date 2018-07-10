import { environment } from "./../../environments/environment";
import { Component } from "@angular/core";

@Component({
  selector: "course-list-header",
  templateUrl: "./course-list-header.component.html",
  styleUrls: ["./course-list-header.component.css"]
})
export class CourseListHeaderComponent {
  constructor() {}

  APP_NAME: string = environment.name;
}

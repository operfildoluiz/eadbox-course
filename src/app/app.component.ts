import { Component, OnInit } from "@angular/core";
import { CourseDataService } from "./course-data.service";
import { Course } from "./course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [CourseDataService]
})
export class AppComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseDataService: CourseDataService) {}

  public ngOnInit() {
    this.courseDataService.list().subscribe(courses => {
      this.courses = courses;
    });
  }
}

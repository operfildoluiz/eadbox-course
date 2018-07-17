import { Component, OnInit } from "@angular/core";
import { CourseDataService } from "../../course-data.service";
import { Course } from "../../course";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
  providers: [CourseDataService]
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseDataService: CourseDataService) {}

  public ngOnInit() {
    
    if (window.localStorage.getItem('courses')) {
      this.courses = JSON.parse(window.localStorage.getItem('courses'));
    } else {

      this.courseDataService.list().subscribe(courses => {
        this.courses = courses;
        window.localStorage.setItem('courses', JSON.stringify(courses));
      });
    }
    
  }
}

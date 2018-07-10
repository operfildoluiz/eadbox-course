import { environment } from "./../../environments/environment";
import { Observable } from "rxjs/Observable";
import { CourseDataService } from "./../course-data.service";
import { Course } from "./../course";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "course-page",
  templateUrl: "./course-page.component.html",
  styleUrls: ["./course-page.component.css"],
  providers: [CourseDataService]
})
export class CoursePageComponent implements OnInit {
  id: string;
  course: Course = new Course();
  APP_NAME = environment.name;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseDataService: CourseDataService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.courseDataService.read(this.id).subscribe(course => {
      this.course = course;

      if (this.course.title == "") {
        this.router.navigateByUrl("error");
      }
    });
  }
}

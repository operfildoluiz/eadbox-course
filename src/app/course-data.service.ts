import { Injectable } from "@angular/core";
import { Course } from "./course";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CourseDataService {
  courses: Course[] = [];
  constructor(private api: ApiService) {}

  list(): Observable<Course[]> {
    return this.api.getAll();
  }

  read(course_slug: string): Observable<Course> {
    return this.api.getBySlug(course_slug);
  }
}

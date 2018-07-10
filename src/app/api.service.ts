import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Course } from "./course";

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  public getAll(): Observable<Course[]> {
    return this.http
      .get(API_URL + "courses?page=1")
      .map(res => {
        let courses = res.json();
        return courses.map(course => new Course(course));
      })
      .catch(this.handleError);
  }

  public getBySlug(course_slug: string): Observable<Course> {
    return this.http
      .get(API_URL + "courses?page=1")
      .map(res => {
        let course = res
          .json()
          .filter(item => item.course_slug === course_slug)
          .pop();

        return new Course(course);
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error("ApiService::handleError", error);
    return Observable.throw(error);
  }
}

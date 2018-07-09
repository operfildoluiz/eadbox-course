import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CourseDataService {

  constructor() { }

  courses: Course[] = [];

  list(): Course[] {
    return this.courses;
  }

  read(course_id: string): Course {
    return this.courses
      .filter(course => course.course_id === course_id)
      .pop();
  }

}

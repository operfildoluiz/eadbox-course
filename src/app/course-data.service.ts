import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CourseDataService {

  courses: Course[] = [];
  constructor() { 
    
    this.courses.push(new Course({
      course_id: 'id',
      course_slug: 'slug',
      title: 'Slug',
      is_paid: false
    }));

    this.courses.push(new Course({
      course_id: 'aedi',
      course_slug: 'eslangue',
      title: 'Eslangue',
      is_paid: true
    }));

  }

  list(): Course[] {
    return this.courses;
  }

  read(course_id: string): Course {
    return this.courses
      .filter(course => course.course_id === course_id)
      .pop();
  }

}

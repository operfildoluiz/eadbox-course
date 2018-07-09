import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from './../course';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  @Input()
  courses: Course[];

  constructor() {
  }

}

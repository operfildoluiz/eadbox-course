import { Component, OnInit, Input } from '@angular/core';
import { Course } from './../course';

@Component({
  selector: 'course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  constructor() { }

  @Input()
  course: Course[];
  
  ngOnInit() {
  }

}

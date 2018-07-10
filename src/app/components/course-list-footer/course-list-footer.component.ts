import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-list-footer',
  templateUrl: './course-list-footer.component.html',
  styleUrls: ['./course-list-footer.component.css']
})
export class CourseListFooterComponent {

  constructor() { }

  @Input()
  total;

}

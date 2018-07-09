import { Component } from '@angular/core';
import {CourseDataService} from './course-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CourseDataService]
})
export class AppComponent {
  constructor(private courseDataService: CourseDataService) {
  }

  get courses() {
    return this.courseDataService.list();
  }
}

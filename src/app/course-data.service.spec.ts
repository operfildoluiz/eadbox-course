/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseDataService } from './course-data.service';

describe('CourseDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDataService]
    });
  });

  it('should ...', inject([CourseDataService], (service: CourseDataService) => {
    expect(service).toBeTruthy();
  }));
});

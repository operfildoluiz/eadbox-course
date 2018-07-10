import { Component, OnInit, Input, LOCALE_ID } from "@angular/core";
import { Course } from "./../course";

@Component({
  selector: "course-list-item",
  templateUrl: "./course-list-item.component.html",
  styleUrls: ["./course-list-item.component.css"],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }]
})
export class CourseListItemComponent implements OnInit {
  constructor() {}

  @Input() course: Course[];

  ngOnInit() {}
}

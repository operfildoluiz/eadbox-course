import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CourseListHeaderComponent } from "./course-list-header/course-list-header.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseListItemComponent } from "./course-list-item/course-list-item.component";
import { CourseListFooterComponent } from "./course-list-footer/course-list-footer.component";
import { ApiService } from "./api.service";
import { CoursesComponent } from "./courses/courses.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CoursePageComponent } from "./course-page/course-page.component";
import { CoursePageHeaderComponent } from './course-page-header/course-page-header.component';
import { CoursePageInfoComponent } from './course-page-info/course-page-info.component';
import { CourseLectureListComponent } from './course-lecture-list/course-lecture-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListHeaderComponent,
    CourseListComponent,
    CourseListItemComponent,
    CourseListFooterComponent,
    CoursesComponent,
    PageNotFoundComponent,
    CoursePageComponent,
    CoursePageHeaderComponent,
    CoursePageInfoComponent,
    CourseLectureListComponent
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}

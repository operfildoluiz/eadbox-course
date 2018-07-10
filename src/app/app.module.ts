import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CourseListHeaderComponent } from "./components/course-list-header/course-list-header.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseListItemComponent } from "./components/course-list-item/course-list-item.component";
import { CourseListFooterComponent } from "./components/course-list-footer/course-list-footer.component";
import { ApiService } from "./api.service";
import { CoursesComponent } from "./components/courses/courses.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CoursePageComponent } from "./components/course-page/course-page.component";
import { CoursePageHeaderComponent } from "./components/course-page-header/course-page-header.component";
import { CoursePageInfoComponent } from "./components/course-page-info/course-page-info.component";
import { CourseLectureListComponent } from "./components/course-lecture-list/course-lecture-list.component";

import { NgSpinningPreloader } from "ng2-spinning-preloader";
import { CourseContentComponent } from "./components/course-content/course-content.component";
import { CourseFeaturesComponent } from "./components/course-features/course-features.component";
import { CourseAboutComponent } from "./components/course-about/course-about.component";

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
    CourseLectureListComponent,
    CourseContentComponent,
    CourseFeaturesComponent,
    CourseAboutComponent
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpModule],
  providers: [ApiService, NgSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule {}

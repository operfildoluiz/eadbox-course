import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseListHeaderComponent } from './course-list-header/course-list-header.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseListFooterComponent } from './course-list-footer/course-list-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListHeaderComponent,
    CourseListComponent,
    CourseListItemComponent,
    CourseListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

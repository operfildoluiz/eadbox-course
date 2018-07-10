import { CoursePageComponent } from "./components/course-page/course-page.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: any = [
  {
    path: "",
    redirectTo: "courses",
    pathMatch: "full"
  },
  {
    path: "courses",
    component: CoursesComponent
  },
  {
    path: "courses/:id",
    component: CoursePageComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
  {
    path: "error",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

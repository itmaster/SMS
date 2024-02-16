import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './modules/student/components/student-list/student-list.component';
import { AddStudentComponent } from './modules/student/components/add-student/add-student.component';

const routes: Routes = [
  {
    path: '', 
    component: StudentListComponent, 
    pathMatch: 'full'
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
  },
  {
    path: 'add-student/:id',
    component: AddStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

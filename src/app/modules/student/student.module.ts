import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AddStudentComponent,
    StudentListComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [DatePipe]
})
export class StudentModule { }


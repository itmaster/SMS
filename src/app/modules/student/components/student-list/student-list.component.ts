import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../student.service';
import { ToastrService } from 'ngx-toastr';
import { StudentData } from '../../student.modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentData: StudentData[] = [];
  modalRef?: BsModalRef | null;
  constructor(
    private router: Router,
    private studentService: StudentService,
    private toastrService:ToastrService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
      this.studentData = this.studentService.getStudent();
      console.log(this.studentData);
      
  }

  openModal(template: TemplateRef<void>, data?:any) {
    this.modalRef = this.modalService.show(template, { id: data, class: 'modal-sm' });
  }

  removeItem(id:any){
    this.studentData = this.studentService.deleteStudent(id);
    this.modalRef?.hide();
    this.toastrService.success('The student has been deleted.')
  }

}

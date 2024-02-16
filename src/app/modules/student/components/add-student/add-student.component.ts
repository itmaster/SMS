import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { StudentService } from '../../student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  formData: FormGroup;
  submitted: boolean = false;
  isButtonClicked: boolean = false;
  bsConfig?: Partial<BsDatepickerConfig>;
  studentId:number;
  isUpdate:boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private studentService: StudentService,
    private toastrService:ToastrService,
    private formBuilder: FormBuilder
  ) { 
    
  }

  ngOnInit(): void {

    this.bsConfig = Object.assign({}, {
      isAnimated: true,
      dateInputFormat: 'DD/MM/YYYY'
    });

    this.formData = this.formBuilder.group({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        class: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        dob: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100),]),
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id  = params.get('id');
      this.updateForm(id);
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.formData.invalid) {
        return;
    }
    this.formData.value.dob = this.datePipe.transform(this.formData.value.dob, 'yyyy-MM-dd');
    if(this.studentId){
      this.formData.value.id = this.studentId;
      this.studentService.updateStudent(this.formData.value);
      this.toastrService.success('The student has been updated successfully.');
    } else {
      const id = Math.floor(1000 + Math.random() * 9000);
      this.formData.value.id = id;
      this.studentService.addStudent(this.formData.value);
      this.toastrService.success('The student has been added successfully.');
    }
    this.router.navigate(['/']);
  }

  updateForm(id:any){
    const data = this.studentService.getStudent().find(x => x.id == id);
    if(data){
        this.isUpdate = true;
        this.studentId = data.id!;
        console.log(this.studentId);
        this.formData.setValue
        this.formData.setValue({
            firstName:data.firstName,
            lastName:data.lastName,
            class:data.class,
            gender:data.gender,
            dob:new Date(data.dob),
            email: data.email
        });
    }
}

}

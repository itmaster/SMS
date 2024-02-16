import { Injectable } from '@angular/core';
import { StudentData } from './student.modal';

@Injectable({ providedIn: 'root' })

export class StudentService {
    constructor(

    ) {
        if(!localStorage.getItem('studentData')){
            localStorage.setItem('studentData','');
        }
    }

    getStudent():StudentData[] {
        let data:StudentData[] = JSON.parse(localStorage.getItem('studentData') || '[]');
        return data;
    }
   
    addStudent(data:StudentData) {
        let studentData = JSON.parse(localStorage.getItem('studentData') || '[]');
        studentData.push(data);
        localStorage.setItem('studentData', JSON.stringify(studentData));
    }
   
    deleteStudent(id:number) {
        let studentData:StudentData[] = JSON.parse(localStorage.getItem('studentData') || '[]');
        studentData.forEach((item, i) => {
            if(item.id === id){
                studentData.splice(i, 1);
            }
        });
        localStorage.setItem('studentData', JSON.stringify(studentData));
        return studentData;
    }
   
    updateStudent(updatedData:StudentData){ 
        let studentData:StudentData[] = this.getStudent();
        studentData.forEach((item, i) => {
            if(item.id === updatedData.id){
                studentData[i] = updatedData;
            }
        });
        localStorage.setItem('studentData', JSON.stringify(studentData));
      }


}
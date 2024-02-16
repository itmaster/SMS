import {Pipe, PipeTransform} from '@angular/core';  
@Pipe ({  
  name : 'gender'  
})  
export class GenderPipe implements PipeTransform {  
  transform(val : string) : string {  
    return val === '1' ? 'Male' : 'Female';  
  }  
}  
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CommonService } from 'src/app/shared/common.service';
import { employeeI } from 'src/app/employee.model';
export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
  UpdateEmp:any;
  empid:any; 
  constructor(public commonService:CommonService,public dialogRef: MatDialogRef<CreateEmployeeComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData){ }

  ngOnInit() {
    if(this.data.id != ''){
      this.populateForm();      
    }    
  }
  closeDialog(){
    this.dialogRef.close();
  }

  onSubmit(){
    // console.log(this.commonService.regForm.value);
    if(this.commonService.regForm.controls['_id'].value){
      this.empid = this.commonService.regForm.controls['_id'].value
      this.commonService.put('employees/'+this.empid,this.commonService.regForm.value).subscribe((res)=>{
        this.closeDialog();      
      })
    }
    else{
      this.commonService.post('employees',this.commonService.regForm.value).subscribe((res)=>{
        this.closeDialog();      
      })
    }
    
  }

  populateForm(){
    this.commonService.getById('employees',this.data.id).subscribe((res)=> {
        this.UpdateEmp = res;
        this.commonService.regForm.patchValue({
        _id: this.UpdateEmp._id,
        name: this.UpdateEmp.name,
        position: this.UpdateEmp.position,
        salary: this.UpdateEmp.salary,
        office: this.UpdateEmp.office,
    })        
    })
     
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { employeeI } from 'src/app/employee.model';
import {MatDialog} from '@angular/material';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';  
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  empData:employeeI[];
  displayedColumns: string[] = ['name', 'position', 'office', 'salary','actions'];
  dataSource;
  constructor(public commonService:CommonService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){
    this.commonService.get('employees',{}).subscribe((res: employeeI[])=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  add_employee(){
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '650px',
      data: {id: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.commonService.regForm.reset();
      this.getEmployees();
    });
  }

  onDelete(id){
    this.commonService.delete('employees',id).subscribe((res)=>{
      this.getEmployees();      
    })
  }

  Update_emp(id){
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '650px',
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.commonService.regForm.reset();
      this.getEmployees();
    });
    
  }

}

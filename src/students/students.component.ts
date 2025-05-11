import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-students',
    standalone: true,
  imports: [AgGridModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  columnDefs: ColDef[] = [
    { headerName: 'שם משתמש', field: 'username' },
    { headerName: 'שם מלא', field: 'fullName' },
    { headerName: 'תפקיד', field: 'role' },
    { headerName: 'סטטוס', field: 'status' }
  ];

  rowData = [
    { username: 'johndoe', fullName: 'John Doe', role: 'Admin', status: 'Active' },
    { username: 'janedoe', fullName: 'Jane Doe', role: 'User', status: 'Inactive' },
    { username: 'bobjones', fullName: 'Bob Jones', role: 'User', status: 'Active' }
  ];
}

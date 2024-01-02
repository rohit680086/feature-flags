import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDialog
} from '@angular/material/dialog';
@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss'
})
export class AuditComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Name: 'Feature 1', Changes: 'Company 1 -> None', Status: 'Pending'},
  {position: 2, Name: 'Feature 2', Changes: 'Org A -> 1', Status: 'Approved'},
  {position: 3, Name: 'Feature 3', Changes: 'User C -> 1', Status: 'Declined'},
];

export interface PeriodicElement {
  Name: string;
  position: number;
  Changes: string;
  Status: string;
  RequestedBy?: string;
  RequestedTime?: string;
}
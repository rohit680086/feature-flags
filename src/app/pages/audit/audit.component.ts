import { Component, } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {
  MatDialog
} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [MatTabsModule,MatPaginatorModule,MatFormFieldModule, MatInputModule, MatTableModule,FormsModule, MatButtonModule],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss'
})
export class AuditComponent {
  displayedColumns: string[] = ['position', 'Name', 'Changes', 'RequestedBy','RequestedTime','LastUpdatedBy','LastUpdatedTime'];
  dataSource = new MatTableDataSource(COLUMN_DATA);
  columnSize= COLUMN_DATA.length;
  constructor() {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

const COLUMN_DATA: ColumnData[] = [
  {position: 1, Name: 'Feature 1', Changes: 'Company 1 -> None', RequestedBy: 'tduan', RequestedTime: '2018-09-06 12:42:53.885', LastUpdatedBy: 'User1', LastUpdatedTime: '2018-09-06 12:42:53.885'},
  {position: 2, Name: 'Feature 2', Changes: 'Org A -> 1', RequestedBy: 'tduan', RequestedTime: '2018-09-06 12:42:53.885', LastUpdatedBy: 'User2', LastUpdatedTime: '2018-09-06 12:42:53.885'},
  {position: 3, Name: 'Feature 3', Changes: 'User C -> 1', RequestedBy: 'tduan', RequestedTime: '2018-09-06 12:42:53.885', LastUpdatedBy: 'User3', LastUpdatedTime: '2018-09-06 12:42:53.885'},
];

export interface ColumnData {
  Name: string;
  position: number;
  Changes: string;
  RequestedBy: string;
  RequestedTime: string;
  LastUpdatedBy: string;
  LastUpdatedTime: string;
}
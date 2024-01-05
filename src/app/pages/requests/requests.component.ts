import { Component, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDialog
} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RequestChangeComponent } from '../../component/request-change/request-change.component';
import {MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [MatTabsModule,MatPaginatorModule,MatFormFieldModule, MatInputModule, MatTableModule,FormsModule, MatButtonModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})
export class RequestsComponent {
  animal: string= '';
  name: string='';
  dataSource = new MatTableDataSource(COLUMN_DATA);
  columnSize= COLUMN_DATA.length;
  displayedColumns: string[] = ['position', 'Name', 'Changes', 'Status','RequestedBy','RequestedTime'];
  constructor(public dialog: MatDialog) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  RequestChangeDialog(): void {
    const dialogRef = this.dialog.open(RequestChangeComponent, {
      data: {name: this.name, animal: this.animal},height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

const COLUMN_DATA: ColumnData[] = [
  {position: 1, Name: 'Feature 1', Changes: 'Company 1 -> None', Status: 'Pending', RequestedBy: 'tduan', RequestedTime: '2018-09-06 12:42:53.885'},
  {position: 2, Name: 'Feature 2', Changes: 'Org A -> 1', Status: 'Approved', RequestedBy: 'tduan', RequestedTime: '2018-09-06 12:42:53.885'},
  {position: 3, Name: 'Feature 3', Changes: 'User C -> 1', Status: 'Declined', RequestedBy: 'tduan', RequestedTime: '2018-09-06 12:42:53.885'},
  {position: 3, Name: 'Feature 4', Changes: 'User A -> 1', Status: 'Approved', RequestedBy: 'tduan', RequestedTime: '2018-09-06 12:42:53.885'},
];

export interface ColumnData {
  Name: string;
  position: number;
  Changes: string;
  Status: string;
  RequestedBy?: string;
  RequestedTime?: string;
}

import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {
  MatDialog
} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [MatTabsModule,MatSortModule,MatPaginatorModule,MatFormFieldModule, MatInputModule, MatTableModule,FormsModule, MatButtonModule],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss'
})
export class AuditComponent {
  displayedColumns: string[] = ['position', 'Name', 'Changes', 'RequestedBy','RequestedTime','LastUpdatedBy','LastUpdatedTime'];
  dataSource = new MatTableDataSource(COLUMN_DATA);
  columnSize= COLUMN_DATA.length;
  @ViewChild(MatSort) sort: MatSort= new MatSort;
  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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
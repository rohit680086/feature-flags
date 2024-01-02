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
import { NewFeatureFlagComponent } from '../../component/new-feature-flag/new-feature-flag.component';
import { RequestChangeComponent } from '../../component/request-change/request-change.component';
import { StatusCheckerComponent } from '../../component/status-checker/status-checker.component';
@Component({
  selector: 'app-features',
  standalone: true,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [MatTabsModule,MatFormFieldModule, MatInputModule, MatTableModule,FormsModule, MatButtonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  animal: string= '';
  name: string='';
  title = 'pure_feature_flag';
  displayedColumns: string[] = ['position', 'Name', 'Changes', 'Status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newFeatureDialog(): void {
    const dialogRef = this.dialog.open(NewFeatureFlagComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  statusCheckDialog(): void {
    const dialogRef = this.dialog.open(StatusCheckerComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  requestChangeDialog(): void {
    const dialogRef = this.dialog.open(RequestChangeComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

export interface PeriodicElement {
  Name: string;
  position: number;
  Changes: string;
  Status: string;
  RequestedBy?: string;
  RequestedTime?: string;
}
export interface PeriodicElement2 {
  Name: string;
  position: number;
  Changes: string;
  RequestedBy: string;
  RequestedTime?: string;
  LastUpdatedBy?: string;
  LastUpdatedTime?: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Name: 'Feature 1', Changes: 'Company 1 -> None', Status: 'Pending'},
  {position: 2, Name: 'Feature 2', Changes: 'Org A -> 1', Status: 'Approved'},
  {position: 3, Name: 'Feature 3', Changes: 'User C -> 1', Status: 'Declined'},
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {position: 1, Name: 'Feature 1', Changes: 'Company 1 -> None', RequestedBy: 'Pending'},
  {position: 2, Name: 'Feature 2', Changes: 'Org A -> 1', RequestedBy: 'Approved'},
  {position: 3, Name: 'Feature 3', Changes: 'User C -> 1', RequestedBy: 'Declined'},
];

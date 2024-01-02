import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { RequestChangeComponent } from '../../component/request-change/request-change.component';
import { StatusCheckerComponent } from '../../component/status-checker/status-checker.component';
@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
  animal: string= '';
  name: string='';
  constructor(public dialog: MatDialog) {}
  RequestChangeDialog(): void {
    const dialogRef = this.dialog.open(RequestChangeComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  StatusCheckDialog(): void {
    const dialogRef = this.dialog.open(StatusCheckerComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

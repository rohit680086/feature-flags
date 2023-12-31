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
import { StatusCheckerComponent } from '../../component/status-checker/status-checker.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [MatTabsModule,MatFormFieldModule, MatPaginatorModule,MatInputModule, MatTableModule,FormsModule, MatButtonModule, MatExpansionModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
  animal: string= '';
  name: string='';
  constructor(public dialog: MatDialog) {}
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
  StatusCheckDialog(): void {
    const dialogRef = this.dialog.open(StatusCheckerComponent, {
      data: {name: this.name, animal: this.animal},height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  panelOpenState = true;
}

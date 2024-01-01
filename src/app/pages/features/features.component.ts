import { Component, Inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-features',
  standalone: true,
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog2, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog3, {
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


//input data
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog2',
  templateUrl: './dialog-overview-example-dialog copy.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog2 {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}



@Component({
  selector: 'dialog-overview-example-dialog3',
  templateUrl: './dialog-overview-example-dialog copy 2.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog3 {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog3>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
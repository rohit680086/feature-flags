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
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';

import { FeatureFlagRestService } from '../../service/feature-flag-rest.service';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MatTabsModule,MatPaginatorModule,MatFormFieldModule, MatInputModule, MatTableModule,FormsModule, MatButtonModule, MatExpansionModule],
  templateUrl: './features.component.html',
  providers: [FeatureFlagRestService],
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  animal: string= '';
  name: string='';
  title = 'pure_feature_flag';
  resp: any;
  constructor(public dialog: MatDialog, private featureRestService :FeatureFlagRestService) {}

  ngOnInit() {
    this.featureRestService.getFeatureFlags().subscribe(
    (response) => { this.resp = response; },
    (error) => { console.log(error); });
  }

  newFeatureDialog(): void {
    const dialogRef = this.dialog.open(NewFeatureFlagComponent, {
      data: {name: this.name, animal: this.animal},height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  statusCheckDialog(): void {
    const dialogRef = this.dialog.open(StatusCheckerComponent, {
      data: {name: this.name, animal: this.animal},height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  requestChangeDialog(): void {
    const dialogRef = this.dialog.open(RequestChangeComponent, {
      data: {name: this.name, animal: this.animal},height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  panelOpenState = false;
}
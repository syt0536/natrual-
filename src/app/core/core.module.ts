import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {GlobalService} from '../service/global/global.service';
// import {RestService} from '../service/rest/rest.service';
import { MatCheckboxModule, MatProgressBarModule, 
  MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
  MatSortModule, MatListModule, 
  MatTabsModule,
  MatToolbarModule, MatTooltipModule,    MatRadioModule,} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { NgxEchartsModule } from "ngx-echarts";
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,MatSliderModule,MatSlideToggleModule,MatExpansionModule,MatSidenavModule,MatMenuModule,
    MatProgressBarModule, 
    MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
    MatSortModule, MatListModule, 
    MatTabsModule,
    MatToolbarModule, MatTooltipModule,    MatRadioModule,NgxEchartsModule,    AgGridModule.withComponents([]),
  ],
  declarations: [],
  providers: [
    // RestService,
    // GlobalService
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatTableModule, MatPaginatorModule, MatSelectModule, MatFormFieldModule, MatSliderModule,
    MatProgressBarModule, MatSlideToggleModule, MatSidenavModule, MatMenuModule,
    MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
    MatSortModule, MatListModule,
    MatTabsModule,
    MatToolbarModule, MatTooltipModule, MatRadioModule,NgxEchartsModule
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
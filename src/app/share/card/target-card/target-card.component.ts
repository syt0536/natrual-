import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RestService} from '../../../service/rest/rest.service';
import {PageMeta} from '../../../models/page-meta';

@Component({
  selector: 'app-target-card',
  templateUrl: './target-card.component.html',
  styleUrls: ['./target-card.component.css']
})
export class TargetCardComponent implements OnInit {
  targetinf;
  arr1;
  pageMeta: PageMeta | null;
  constructor(
    public dialogRef: MatDialogRef<TargetCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private rest: RestService,
  ) { }

  ngOnInit() {
    this.rest.getDataList(`NPDtargetinfo/?target_id=${this.data.moleculeChemblId}`)
    .subscribe(data => {
      this.targetinf = data['np_dtargetinfos'][0];
      console.log(this.targetinf);
    });
    this.rest.getDataList(`NPidinotherdatabase/?database_id=${this.data.moleculeChemblId}`)
    .subscribe(data => {
      this.arr1 = data['n_pidinotherdatabases'][0];
      console.log(this.arr1);
    });
    this.getNum(0,10)
  }
  getNum(page,perPage){
    this.rest.getDataList(`NPDtargetinfo/?database_id=${this.data.moleculeChemblId}`, page, perPage)
    .subscribe(data => {
      this.pageMeta=data['meta']
      console.log(this.pageMeta);
  })}

}

import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RestService} from '../../../service/rest/rest.service';
import {PageMeta} from '../../../models/page-meta';
import {Router} from '@angular/router';
@Component({
  selector: 'app-properties-card',
  templateUrl: './properties-card.component.html',
  styleUrls: ['./properties-card.component.css']
})
export class PropertiesCardComponent implements OnInit {
  moleculeStructure;
  arr1;
  pageMeta: PageMeta | null;
  constructor(
    public dialogRef: MatDialogRef<PropertiesCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private rest: RestService,
         private     router:Router
  ) { }

  ngOnInit() {
    this.rest.getDataList(`YNpDbLocal/?database_id=${this.data.moleculeChemblId}`)
    .subscribe(data => {
      this.moleculeStructure = data['np_db_locals'][0];
      // this.drug = data;
      // this.pageMeta = data['meta'];
      console.log(this.moleculeStructure);
    })
    this.rest.getDataList(`NPidinotherdatabase/?database_id=${this.data.moleculeChemblId}`)
    .subscribe(data => {
      this.arr1 = data['n_pidinotherdatabases'][0];
      console.log(this.arr1);
    });
    this.getNum(0,10)
  }
  // 获取化合物相关的靶点个数
  getNum(page,perPage){
    this.rest.getDataList(`NPDtargetinfo/?database_id=${this.data.moleculeChemblId}`, page, perPage)
    .subscribe(data => {
      this.pageMeta=data['meta']
      console.log(this.pageMeta);
  })}
  // 跳转靶点信息列表页面
  goTargetList(){
    this.router.navigate(['/target-table/','?database_id='+this.data.moleculeChemblId])
  }
  close() {
    this.dialogRef.close()
  }
}

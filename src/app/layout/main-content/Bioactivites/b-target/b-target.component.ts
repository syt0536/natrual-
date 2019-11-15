import { Component, OnInit, Input } from '@angular/core';
import {RestService} from '../../../../service/rest/rest.service'
import {PageMeta} from '../../../../models/page-meta';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MatDialog} from '@angular/material';
import {PropertiesCardComponent} from '../../../../share/card/properties-card/properties-card.component';
@Component({
  selector: 'app-b-target',
  templateUrl: './b-target.component.html',
  styleUrls: ['./b-target.component.css']
})
export class BTargetComponent implements OnInit {
  arr=[];
  result1='';
  namet='';
  // obj:object;
  // arro=[]
  pageMeta: PageMeta | null;
  @Input() pageSizeOptions = [5, 10];
  constructor(
    private restservice: RestService,
    private myrouter: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.myrouter.paramMap.subscribe((params: ParamMap) => {
    console.log(params);
    this.result1 = params.get('id');})
    this.getData(0,10)
    this.getName(0,10)
  }
  getData(page, perPage){
    this.restservice.getDataList(`NPassay/?target_id=${this.result1}`, page, perPage)
    .subscribe(data => {
      this.arr=data['n_passays'],
      this.pageMeta=data['meta']
      console.log(this.arr)
      // for(var i=0;i<data['n_passays'].length;i++){
      //   this.restservice.getDataList(`YNpDbLocal/?database_id=${this.arr[i]['database_id']}`, page, perPage)
      //   .subscribe(data =>{
      //     this.obj=data['np_db_locals'][0]
      //     this.arro.push(this.obj)
      //     console.log(this.obj)
      //   })
      // }
    });
  }
  getName(page, perPage){
    this.restservice.getDataList(`NPDtargetinfo/?target_id=${this.result1}`, page, perPage)
    .subscribe(data => {
    this.namet = data['np_dtargetinfos'][0]['pref_name'];
    console.log(this.namet);
    });
  }
  openMoleculePropertiesDialog(moleculeChemblId: number | string) {
    this.dialog.open(PropertiesCardComponent, {
      width: '800px',
      data: {
        moleculeChemblId: moleculeChemblId
      }
    })
  }
  pageChange(event) {
    this.getData( event.pageIndex, event.pageSize);
  }
}
import { Component, OnInit, Input } from '@angular/core';
import {RestService} from '../../../../service/rest/rest.service'
import {PageMeta} from '../../../../models/page-meta';
import {MatDialog} from '@angular/material';
import {TargetCardComponent} from '../../../../share/card/target-card/target-card.component';
import {ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-b-compound',
  templateUrl: './b-compound.component.html',
  styleUrls: ['./b-compound.component.css']
})
export class BCompoundComponent implements OnInit {
  arr = [];
  result1 = 'NP332203';
  name = '';
  pageMeta: PageMeta | null;
  @Input() pageSizeOptions = [5, 10];
  constructor(
    private restservice: RestService,
    public dialog: MatDialog,
    private myrouter: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.myrouter.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      this.result1 = params.get('id');})
      this.getData(0,10)
      this.getName(0,10)
    }
getData(page, perPage){
  this.restservice.getDataList(`NPassay/?database_id=${this.result1}`, page, perPage)
  .subscribe(data => {
      this.arr=data['n_passays'],
      this.pageMeta=data['meta']
      console.log(this.arr)
  });
}
getName(page, perPage){
  this.restservice.getDataList(`NPenglishnamecas/?database_id=${this.result1}`, page, perPage)
  .subscribe(data => {
    this.name = data['n_penglishnamecas'][0]['pref_name'];
    console.log(this.name);
  });
}
pageChange(event) {
  this.getData( event.pageIndex, event.pageSize);
}
openMoleculePropertiesDialog(moleculeChemblId: number | string) {
  this.dialog.open(TargetCardComponent, {
    width: '800px',
    data: {
      moleculeChemblId: moleculeChemblId
    }
  })
}
}

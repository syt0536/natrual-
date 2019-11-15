import { Component, OnInit, Input } from '@angular/core';
import {RestService} from '../../../../service/rest/rest.service';
import {PageMeta} from '../../../../models/page-meta';
import {MatDialog} from '@angular/material';
import {TargetCardComponent} from '../../../../share/card/target-card/target-card.component';
@Component({
  selector: 'app-b-derivative',
  templateUrl: './b-derivative.component.html',
  styleUrls: ['./b-derivative.component.css']
})
export class BDerivativeComponent implements OnInit {
  arr  = [];
  result1 = 'D2';
  pageMeta: PageMeta | null;
  @Input() pageSizeOptions = [5, 10];
  constructor(
    private restservice: RestService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getData(0,10)
    // this.getName(0,10)
  }
getData(page, perPage){
  this.restservice.getDataList(`NPderivativeassay/?derivative_id=${this.result1}`, page, perPage)
  .subscribe(data => {
      this.arr=data['n_pderivativeassays'],
      this.pageMeta=data['meta']
      console.log(this.arr)
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

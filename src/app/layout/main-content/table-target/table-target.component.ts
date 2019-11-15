import { Component, OnInit,AfterViewInit, ViewChild,ElementRef ,Input,} from '@angular/core';
import {RestService} from '../../../service/rest/rest.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PageMeta} from '../../../models/page-meta';
import {FormControl} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-table-target',
  templateUrl: './table-target.component.html',
  styleUrls: ['./table-target.component.css']
})
export class TableTargetComponent implements OnInit {
  params;
  private gridApi;
  private gridColumnApi;
  paginationPageSize=10;
  paginationGetRowCount;
  paginationGetTotalPages;
  fileName1;
  sheetName1;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs = [
    {headerName: 'Pref Name', field: 'pref_name', sortable: true, filter: true, checkboxSelection: true , width:400  },
    {headerName: 'Target Id', field: 'target_id', sortable: true, filter: true, width:400,  },
    {headerName: 'Target Type ', field: 'target_type', sortable: true, filter: true, width:400 },
    {headerName: 'Organism', field: 'organism', sortable: true, filter: true, width:400 }
  ];
    toppings = new FormControl();
    toppingList: string[] = ['Pref Name', 'Target Id', 'Target Type','Organism'];
    displayedColumns: string[] = ['Pref Name', 'Target Id', 'Target Type','Organism'];
    images = [];
    result1: string;
    scontent: string;
    // 分页
    pageMeta: PageMeta | null;
    @ViewChild('content') content: ElementRef;
    @ViewChild(MatSort) sort: MatSort;
    @Input() result1$: Observable<string>;
    @Input() pageSizeOptions = [5,10];
    @Input() pageSize = 10;
constructor(
    private restservice: RestService ,
    private myrouter: ActivatedRoute,
    private myRouter: Router,
    ) { }
ngOnInit() {
    this.myrouter.paramMap.subscribe((params: ParamMap) => {
    console.log(params);
    this.result1 = params.get('id');
    this._getDrugs(0, this.pageSize);
  });
}
hqnew() {
      this.result1 = this.content.nativeElement.value;
      this._getDrugs(0, this.pageSize);
}
private _getDrugs(page?, perPage?) {
    this.restservice.getDataList(`NPDtargetinfo/${this.result1}&ordering=target_id`, page, perPage)
    .subscribe(data => {
      this.images = data['np_dtargetinfos'];
      this.pageMeta = data['meta'];
      console.log(this.images);
    });
}
pageChange(event) {
  this._getDrugs(event.pageIndex, event.pageSize);
}
cellClicked(params){
  this.myRouter.navigateByUrl(`target/${params.data.target_id}`)
  console.log(params)
}
onBtExport() {
  this.params = {
    fileName: this.fileName1,
    sheetName: this.sheetName1
  };
  this.gridApi.exportDataAsCsv(this.params);
}
onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
}
}

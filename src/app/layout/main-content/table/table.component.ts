import { Component, OnInit,AfterViewInit, ViewChild,ElementRef ,Input,} from '@angular/core';
import {RestService} from '../../../service/rest/rest.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PageMeta} from '../../../models/page-meta';
import {FormControl} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
params;
private gridApi;
private gridColumnApi;
paginationPageSize=10;
fileName1;
sheetName1;
@ViewChild('agGrid') agGrid: AgGridAngular;
columnDefs = [
  {headerName: 'Canonical Smiles', field: 'canonical_smiles', sortable: true, filter: true, checkboxSelection: true , width:500  },
  {headerName: 'Database Id', field: 'database_id', sortable: true, filter: true, width:500, },
  {headerName: 'Formula', field: 'formula', sortable: true, filter: true, width:500 } 
];
    toppings = new FormControl();
    toppingList: string[] = ['Canonical Smiles', 'Database Id', 'Formula'];
    displayedColumns: string[] = ['Canonical Smiles', 'Database Id', 'Formula'];
    images:any;
    result1: string;
    // 分页
    pageMeta: PageMeta | null;
    @ViewChild('content') content: ElementRef;
    @Input() result1$: Observable<string>;
    @ViewChild(MatSort) sort: MatSort;
    @Input() pageSizeOptions = [5, 10];
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
// 小搜索框的搜索方法
hqnew() {
      this.result1 = this.content.nativeElement.value;
      this._getDrugs(0, this.pageSize);
}
private _getDrugs(page?, perPage?) {
    this.restservice.getDataList(`YNpDbLocal/?search=${this.result1}`, page, perPage)
    .subscribe(data => {
      this.images = data['np_db_locals'];
      this.pageMeta = data['meta'];
      console.log(this.images);
      console.log(this.pageMeta);
    });
}
pageChange(event) {
  this._getDrugs(event.pageIndex, event.pageSize);
}
cellClicked(params){
  this.myRouter.navigateByUrl(`compound/${params.data.database_id}`)
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
// getSelectedRows() {
//   const selectedNodes = this.agGrid.api.getSelectedNodes();
//   const selectedData = selectedNodes.map( node => node.data );
//   const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
//   alert(`Selected nodes: ${selectedDataStringPresentation}`);
// }
}

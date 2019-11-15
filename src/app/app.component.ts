import { Component ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
// declare var $: any;
import * as $ from 'jquery';
$('body').addClass('');
// import {jsmeApplet,JSApplet} from '../assets/jsme/jsme.nocache.js'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  params;
  private gridApi;
  private gridColumnApi;
  paginationPageSize=5;
  fileName1;
  sheetName1;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  
  columnDefs = [
    {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true,width:300,cellStyle:{color: 'red', 'background-color': 'green',} },
    {headerName: 'model', field: 'model', sortable: true, filter: true ,cellStyle:{color: 'red', 'background-color': 'green',}},
    {headerName: 'price', field: 'price', sortable: true, filter: true ,cellStyle:{color: 'red', 'background-color': 'green',}}
    
];
colDef={
  headerName:'make',
  field:'make',
  
}


  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000,a:1 },
      { make: 'Ford', model: 'Mondeo', price: 32000,a:1 },
      { make: 'Porsche', model: 'Boxter', price: 72000,a:1 },
      { make: 'Toyota', model: 'Celica', price: 35000,a:1 },
      { make: 'Ford', model: 'Mondeo', price: 32000,a:1 },
      { make: 'Porsche', model: 'Boxter', price: 72000,a:1 },
      { make: 'Toyota', model: 'Celica', price: 35000,a:1 },
      { make: 'Ford', model: 'Mondeo', price: 32000,a:1 },
      { make: 'Porsche', model: 'Boxter', price: 72000,a:1 },
      { make: 'Toyota', model: 'Celica', price: 35000,a:1 },
      { make: 'Ford', model: 'Mondeo', price: 32000,a:1 },
      { make: 'Porsche', model: 'Boxter', price: 72000,a:1 }
  ];
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
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

}

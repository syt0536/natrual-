import { Component, OnInit , ViewChild , ElementRef , Input} from '@angular/core';
import {RestService} from '../../../service/rest/rest.service';
import {ActivatedRoute, ParamMap,Router} from '@angular/router';
import {PageMeta} from '../../../models/page-meta';
import {Observable} from 'rxjs';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AgGridAngular } from 'ag-grid-angular';
import {Number} from '../../../models/number';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // 用来展示图表接口参数
  datav:Number[]
  dataname=[];
  para:string;
  datav1:Number[]
  dataname1=[];
  para1:string;
  //  可导出表格参数
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
    {headerName: 'Target Id', field: 'target_id', sortable: true, filter: true, checkboxSelection: true , width:300  },
    {headerName: 'Pref_name', field: 'pref_name', sortable: true, filter: true, width:300, },
    {headerName: 'Target_chembl_id', field: 'target_chembl_id', sortable: true, filter: true, width:300 }, 
    {headerName: 'Target_type', field: 'target_type', sortable: true, filter: true, width:300 },
    {headerName: 'Organism', field: 'organism', sortable: true, filter: true, width:300 } 
  ];
  result1: string;
  // 分页
  pageMeta2: PageMeta | null;
  pageMeta3: PageMeta | null;
  pageMeta4: PageMeta | null;
  pageMetaa: PageMeta | null;
  // 接受数据的对象及数组
  imagesa = '';
  images = {};
  array = new MatTableDataSource();
  arra = [];
  arr ;
  arr1 ;
  arr2 ;
  arr3 = [];
  id: string;
  public obj:{};
  public obj2:{};
  public obj3:{};
  echart: any;
  // @Input() displayedColumns = [];
  displayedColumns: string[] = ['target_type','pref_name','organism','target_chembl_id','Target Id'];
  displayedColumnsb: string[] = ['Activity Type', 'Activity Value', 'Activity Units','Activity Relation','Reference','Target Id','Data Source Db'];
  @ViewChild('click') click:ElementRef;
  @Input() result1$: Observable<string>;
  @Input() pageSizeOptions = [5, 10];
  @Input() pageSize = 10;
  constructor(private restservice: RestService ,
              private myrouter: ActivatedRoute,
              private myRouter: Router,) { }
    ngOnInit() {
      this.myrouter.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      this.result1 = params.get('id');
      this._getDrugs(0, this.pageSize);
      this._getDrugsa(0, this.pageSize);
      this._getDrugsav()
      this.restservice.getData(`NPDtargetinfoview/?pk=${this.result1}`)
      .subscribe(data => {
        // this.datav[0]['value'] = data['organism'][0][1]
        // this.datav[1]['value'] = data['organism'][1][1]
        this.datav=data['organism']
        console.log(1)
        console.log(data);
        console.log(this.datav);

        for (let i = 0; i < data['organism'].length; i++) {
              this.para=data['organism'][i]['name']
          this.dataname.push(this.para)
        }
        this.datav1=data['target_type']
        console.log(1)
        console.log(data);
        console.log(this.datav1);

        for (let i = 0; i < data['target_type'].length; i++) {
              this.para1=data['target_type'][i]['name']
          this.dataname1.push(this.para1)
        }
        this.obj3 = {
          title : {
              text: 'Organism',
              // subtext: '纯属虚构',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: this.dataname
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:this.datav,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
        this.obj2 = {
          title : {
              text: 'Target Type',
              // subtext: '纯属虚构',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data:this.dataname1
          },
          series : [
              {
                  name: 'Target Type',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:this.datav1,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
    })
    //
      this.obj = {
        title: {text: `Similarity Distribution`,
        textAlign:'auto'
      },
         color: ['#3398DB','#c23531'],
         tooltip : {
             trigger: 'axis',
             axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                 type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
             }},
         grid: {
             left: '3%',
             right: '4%',
             bottom: '3%',
             containLabel: true
         },
         xAxis : [
             {   type : 'category',
                 data :['0-0.2', '0.2-0.4','0.4-0.6','0.6-0.8','0.8-1.0'],
                 axisTick: {
                     alignWithLabel: true
                 },
                 name:''
             }
         ],
         yAxis : [
             { name:`Natrue Prouduct s`,
               type : 'value'}],
         series : [
             {
                 name: '',
                 type: 'bar',
                 barWidth: '40%',
                 data: ['1100','456','321','234','10','2']
             }
         ]
      }
    })}
    // 获取化合物的基本信息
    private _getDrugs(page?, perPage?) {
        this.restservice.getDataList(`YNpDbLocal/?database_id=${this.result1}`, page, perPage)
        .subscribe(data => {
          this.arr = data['np_db_locals'][0];
          console.log(this.arr);
        });
        this.restservice.getDataList(`NPidinotherdatabase/?database_id=${this.result1}`, page, perPage)
        .subscribe(data => {
          this.arr1 = data['n_pidinotherdatabases'][0];
          console.log(this.arr1);
        });
        this.restservice.getDataList(`NPenglishnamecas/?database_id=${this.result1}`, page, perPage)
        .subscribe(data => {
          this.arr2 = data['n_penglishnamecas'][0];
          console.log(this.arr2);
        });
// 获取当前化合物的衍生物
        this.restservice.getDataList(`NPderivativeid/?database_id=${this.result1}`, page, perPage)
        .subscribe(data => {
          this.arr3 = data['n_pderivativeids'];
          this.pageMeta3 = data['meta'];
          console.log(this.arr3);
        });
        this.restservice.getDataList(`NPassay/?database_id=${this.result1}`, page, perPage)
        .subscribe(data => {
            // this.arr=data['n_passays'],
            this.pageMeta2=data['meta']
            console.log(this.arr)
        });
    }
    // 获取当前化合物的靶点信息
    private _getDrugsa(page?, perPage?) {
      this.restservice.getDataList(`NPDtargetinfo/?database_id=${this.result1}`, page, perPage)
      .subscribe(data => {
        this.arra = data['np_dtargetinfos']
        this.pageMeta4=data['meta']
        console.log(this.arra);
    })}
    private _getDrugsav() {
}
// private _getDrugsa(page?, perPage?) {
//   this.restservice.getDataList(`NPDtargetinfo/?target_id=${this.result1}`, page, perPage)
//   .subscribe(data => {
//     for(var i=0;i<=data['n_passays'].length-1;i++){
//     this.imagesa = data['n_passays'][i]['target_id'];
//     this.restservice.getDataList(`NPDtargetinfo/?target_id=${this.imagesa}`)
//     .subscribe(data => {
//       this.images = data['np_dtargetinfos'][0];
//       this.arra.push(this.images)
//     })
//   }
//   this.array.data=this.arra;
//   console.log(this.arra);
// })}
// 获取当前化合物的衍生物的活性数据
  // onclick(id?,page?,pageSize?){
  //     this.id=id
  //     this.restservice.getDataList(`NPderivativeassay/?derivative_id=${id}`,page,pageSize)
  //     .subscribe(data => {
  //     console.log(data);
  //     this.arr4 = data['n_pderivativeassays'];
  //     this.pageMeta4 = data['meta'];
  //     console.log(this.arr4);
  //     });
  // }
  //   pageChangeb(event) {
  //     this.onclick(this.id, event.pageIndex, event.pageSize);
  //   }

  pageChange(event) {
    this._getDrugsa( event.pageIndex, event.pageSize);
  }
  // 点击跳转靶点详情页面
  cellClicked(params){
    this.myRouter.navigateByUrl(`target/${params.data.target_id}`)
    console.log(params)
  }
  sortchanged(params){
    // console.log(params)
  }
  //  导出CSV
  onBtExport() {
    this.params = {
      fileName: this.fileName1,
      sheetName: this.sheetName1
    };
    this.gridApi.exportDataAsCsv(this.params);
  }
    //  生成可导出表格
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}

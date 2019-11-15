import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap, Router} from '@angular/router';
import {RestService} from '../../../service/rest/rest.service';
@Component({
  selector: 'app-search-r',
  templateUrl: './search-r.component.html',
  styleUrls: ['./search-r.component.css']
})
export class SearchRComponent implements OnInit {
  images = [];
  id1='';
  id2='';
  obj;
  num:number;
  result1: string;
  result2: string;
  structureType:string;
  drugDisplayedColumns = ['structure', 'database_id', 'formula', 'amw', 'slogp', 'tpsa', 'numrotatablebonds', 'numhbd', 'numhba'];
  constructor(
    private myrouter: ActivatedRoute,
    private restservice: RestService ,
  ) { 
    
  }

  ngOnInit() {
    this.myrouter.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      if(queryParams.structureType === 'structure'){
        this.result1 = queryParams.similarity;
        this.result2 = queryParams.smiles;
        this.structureType =queryParams.structureType;
        this._getDrugs(this.result2, this.result1);
      }
      else if  (queryParams.structureType === 'substructure'){
        // this.result1 = queryParams.similarity;
        this.result2 = queryParams.smiles;
        this.structureType =queryParams.structureType;
         this._getDrugs2(this.result2);
      }

    });
  }
  private _getDrugs(sea?, si?) {
    this.restservice.getDataList(`Structuresimilarity/?pk1='${sea}'&pk2=${si}`)
    .subscribe(data => {
      this.num = data.length
      console.log(this.num)
      for(var i=0;i<data.length;i++){
        this.id1=data[i]['name']
        this.restservice.getDataList(`YNpDbLocal/?database_id=${this.id1}`)
          .subscribe(data => {
            this.obj = data['np_db_locals'][0];
            this.images.push(this.obj)
            console.log(this.images);
          });
        // this.pageMeta = data['meta'];
        console.log(data);
        console.log(this.images)
      }
     
    });
}
private _getDrugs2(sea?) {
  this.restservice.getDataList(`Substructuresimilarity/?pk='${sea}'`)
  .subscribe(data => {
    this.num = data.length
    console.log(this.num)
    for(var i=0;i<data.length;i++){
      this.id1=data[i]['name']
      this.restservice.getDataList(`YNpDbLocal/?database_id=${this.id1}`)
        .subscribe(data => {
          this.obj = data['np_db_locals'][0];
          this.images.push(this.obj)
          console.log(this.images);
        });
      // this.pageMeta = data['meta'];
      console.log(data);
      console.log(this.images)
    }
})}
}

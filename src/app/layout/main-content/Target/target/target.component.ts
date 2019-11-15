import { Component, OnInit , ViewChild,ElementRef ,Input} from '@angular/core';
import {RestService} from '../../../../service/rest/rest.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PageMeta} from '../../../../models/page-meta';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  result1: string;
  scontent: string;
  num:number;
  // 分页
  images = [];
  constructor(private restservice: RestService ,
              private myrouter: ActivatedRoute) { }
  ngOnInit() {
    this.myrouter.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      this.result1 = params.get('id');
      this._getDrugs();
      this.getBioactivites();
    });
  }
  private _getDrugs() {
      this.restservice.getDataList(`NPDtargetinfo/?target_id=${this.result1}`)
      .subscribe(data => {
        this.images = data['np_dtargetinfos'];
        console.log(this.images);
      });
    }
getCompounds(){

}
getBioactivites(){
  this.restservice.getDataList(`NPassay/?target_id=${this.result1}`).subscribe(data=>{
      this.num=data["meta"]["total_results"]
  })
}
}

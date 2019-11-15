import {Injectable, NgZone} from '@angular/core';
// import {Subject} from 'rxjs/Subject';
import {DrugListParamsType} from '../../enum/drug-list-param-type.enum';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import {TargetListParamType} from '../../enum/target-list-param-type.enum';
import {PathwayListParamType} from '../../enum/pathway-list-param-type.enum';
declare const JSApplet: any;
@Injectable()
export class GlobalService {
  JSMEApplet$ = new Subject<any>();
  // global loading status
  constructor(private router: Router,
              private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      window['jsmeOnLoad'] = () => {
        console.log('JSME init');
        this.JSMEApplet$.next(JSApplet);
      };
    });
  }

  private _globalLoading = new Subject<boolean>();
  loadingStatus$ = this._globalLoading.asObservable();
  setLoading(status: boolean): void {
    this._globalLoading.next(status)
  }

  gotoDrugList(paramsType: DrugListParamsType, params?: any) {
    const queryParams = {paramsType: paramsType};
    Object.assign(queryParams, params);
    this.router.navigate(['drug-glau-treatment'], {
      queryParams: queryParams
    });
  }

  gotoTargetList(paramsType: TargetListParamType, params?: any) {
    const queryParams = {paramsType: paramsType};
    Object.assign(queryParams, params);
    this.router.navigate(['target'], {
      queryParams: queryParams
    });
  }

  gotoPathwayList(paramsType: PathwayListParamType, params?: any) {
    const queryParams = {paramsType: paramsType};
    Object.assign(queryParams, params);
    this.router.navigate(['pathway'], {
      queryParams: queryParams
    });
  }
}

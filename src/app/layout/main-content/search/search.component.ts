import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../../../service/global/global.service';
import {TargetListParamType} from '../../../enum/target-list-param-type.enum';
import {DrugListParamsType} from '../../../enum/drug-list-param-type.enum';
import {PathwayListParamType} from '../../../enum/pathway-list-param-type.enum';
import {JsmeComponent} from '../../../jsme/jsme/jsme.component';
import {RestService} from '../../../service/rest/rest.service';
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  // pageMeta: PageMeta | null;
  form: FormGroup;
  displayedColumns: string[] = [ 'Database Id', 'Score'];
  @ViewChild(JsmeComponent) jsme: JsmeComponent;
  jsmeSmiles: string;
  images=[];
  structureTypes = ['structure', 'substructure'];
  structureType = this.structureTypes[0];
  similarity = 0.9;
  drugSearchTypeList = [
    {inputType: 'Compounds name', value: 'ARBACLOFEN'},
    {inputType: 'Database Id', value: 'NP1'},
  ];
  drugSelectedType = this.drugSearchTypeList[0].inputType;
  drugKeyword = this.drugSearchTypeList[0].value;
  targetSearchTypeList = [
    {inputType: 'Target name', value: 'Alpha-1B adrenergic receptor'},
    {inputType: 'Target Id', value: 'T1'},
    {inputType: 'Target Type', value: 'SINGLE PROTEIN'},
    {inputType: 'ChEMBL ID', value: 'CHEMBL232'}
  ];
  targetSelectedType = this.targetSearchTypeList[0].inputType;
  targetKeyword = this.targetSearchTypeList[0].value;
  pathwaySearchTypeList = [
    {inputType: 'Pathway name', value: 'Vascular smooth muscle contraction'},
    {inputType: 'Pathway ID', value: 'hsa04270'}
  ];
  pathwaySelectedType = this.pathwaySearchTypeList[0].inputType;
  pathwayKeyword = this.pathwaySearchTypeList[0].value;

  constructor(private router: Router,
              private globalService: GlobalService,
              private restservice: RestService ,
              ) { };

  ngOnInit() {
    this.jsmeSmiles = 'CNCC(O)c1ccc(OC(=O)C(C)(C)C)c(OC(=O)C(C)(C)C)c1';
    // this._getDrugs(this.jsme.smiles,this.similarity)
    this.form = new FormGroup({
      name: new FormControl ('', [Validators.required, Validators.minLength(2)]),
      name1: new FormControl ('', [Validators.required, Validators.minLength(2)]),
      hbond: new FormControl('', []),
      hbond1:new FormControl('', []),
      hbonda: new FormControl('', []),
      hbonda1:new FormControl('', []),
      rot: new FormControl('', [Validators.required, Validators.email ]) ,
      // phone: new FormControl('',[Validators.required, phoneNumberValidation]),
      rot1: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })
  }

  getJsmeSmiles() {
    this.jsmeSmiles = this.jsme.smiles;
  }

  drugSearchTypeChange(selectedType: string) {
    this.drugKeyword = this.drugSearchTypeList.find(el => el.inputType === selectedType).value;
  }

  drugSubmit() {
    this.drugKeyword = this.drugKeyword.trim();
    if (this.drugSelectedType === 'Compounds name') {
      this.drugKeyword='?search='+this.drugKeyword
      this.router.navigate(['/compound-table-name/', this.drugKeyword])
    } else if (this.drugSelectedType === 'Database Id') {
      this.drugKeyword='?database_id='+this.drugKeyword
      this.router.navigate(['/compound-table-name/', this.drugKeyword])
    }
    this.router.navigate(['/compound-table-name/', this.drugKeyword])
  }

  targetSearchTypeChange(selectedType: string) {
    this.targetKeyword = this.targetSearchTypeList.find(el => el.inputType === selectedType).value;
  }

  targetSubmit() {
    this.targetKeyword = this.targetKeyword.trim();
    if (this.targetSelectedType === 'Target name') {
      // this.globalService.gotoTargetList(TargetListParamType.target_name, {
      //   targetName: this.targetKeyword
      // });
      this.targetKeyword='?pref_name='+this.targetKeyword
      this.router.navigate(['/target-table/', this.targetKeyword])
    } else if (this.targetSelectedType === 'Target Id') {
      this.targetKeyword='?target_id='+this.targetKeyword
      this.router.navigate(['/target-table/', this.targetKeyword])
    } else if (this.targetSelectedType === 'Target Type') {
      this.targetKeyword='?target_type='+this.targetKeyword
      this.router.navigate(['/target-table/', this.targetKeyword])
    } else if (this.targetSelectedType === 'ChEMBL ID') {
      this.targetKeyword='?target_chembl_id='+this.targetKeyword
      this.router.navigate(['/target-table/', this.targetKeyword])
    }
  }

  pathwaySearchTypeChange(selectedType: string) {
    this.pathwayKeyword = this.pathwaySearchTypeList.find(el => el.inputType === selectedType).value;
  }

  pathwaySubmit() {
    this.pathwayKeyword = this.pathwayKeyword.trim();
    if (this.pathwaySelectedType === 'Pathway ID') {
      this.globalService.gotoPathwayList(PathwayListParamType.pathway_id, {
        pathwayId: this.pathwayKeyword
      })
    } else if (this.pathwaySelectedType === 'Pathway name') {
      this.globalService.gotoPathwayList(PathwayListParamType.pathway_name, {
        pathwayName: this.pathwayKeyword
      })
    }
  }


  onSubmit(smiles: string) {
      if (this.structureType === 'structure') {
        this.router.navigate(['/searchr/'], {queryParams: {
          structureType: this.structureType,
          smiles: this.jsme.smiles,
          similarity: this.similarity
        }});
      } else if ( this.structureType === 'substructure') {
        this.router.navigate(['/searchr/'], {queryParams: {
          structureType: this.structureType,
          smiles: this.jsme.smiles,
        }});
      // this._getDrugs(smiles, this.similarity)
      }
    }
    private _getDrugs(sea?, si?) {
      this.restservice.getDataList(`Structuresimilarity/?pk1='${sea}'&pk2=${si}`)
      .subscribe(data => {
        this.images = data;
        // this.pageMeta = data['meta'];
        console.log(data);
      });
  }
  // get name() {return this.form.get('name'); }
  // get name1() {return this.form.get('name1'); }
  // get hbond() {return this.form.get('hbond'); }
  // get hbond1() {return this.form.get('hbond1'); }
  // get hbonda () {return this.form.get('hbonda'); }
  // get hbonda1 () {return this.form.get('hbonda1'); }
  // get rot() {return this.form.get('rot')}
  // get rot1() {return this.form.get('rot1')}
  onSubmitform() {
    const form = this.form.value;
    const body = {
      username: form.name,

      phone: form.phone,
      email: form.email,
      message: form.message,
    };

    console.log('feedback:', body);}
}

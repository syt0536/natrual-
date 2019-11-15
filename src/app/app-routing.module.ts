import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './layout/main-content/table/table.component';
import {SearchComponent} from './layout/main-content/search/search.component';
import {ShouyeComponent} from './layout/shouye/shouye.component';
import {DetailsComponent} from './layout/main-content/details/details.component';
import {TargetComponent} from './layout/main-content/Target/target/target.component';
import {TableTargetComponent} from './layout/main-content/table-target/table-target.component';
import {SearchRComponent} from './layout/main-content/search-r/search-r.component';
import {BCompoundComponent} from './layout/main-content/Bioactivites/b-compound/b-compound.component';
import {BTargetComponent} from './layout/main-content/Bioactivites/b-target/b-target.component';
import {ContactComponent} from './layout/main-content/contact/contact.component';
import {TableCompoundComponent} from './layout/main-content/table-compound/table-compound.component'
const routes: Routes = [
  {
    path: '',
    component: ShouyeComponent
  },
  {
    path: 'compound-table/:id',
    component: TableComponent
  },
  {
    path: 'compound-table-name/:id',
    component: TableCompoundComponent
  },
  {
    path: 'target-table/:id',
    component: TableTargetComponent
  },

  {
    path: 'compound/:id',
    component: DetailsComponent
  },
  {
    path: 'target/:id',
    component: TargetComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path:'searchr',
    component:SearchRComponent
  },
  {
    path:'b/:id',
    component:BCompoundComponent
  },
  {
    path:'c/:id',
    component:BTargetComponent
  },
  {
    path:'contact',
    component:  ContactComponent
  },

  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

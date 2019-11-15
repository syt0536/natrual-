import {Drug} from './drug';
import {Target} from './target';

export interface Pathway {
  url?: string;
  descripor?: string;
  pathway_name?: string;
  id?: number;
  drugs?: Drug[];
  targets?: Target[];
  target_count?: number;
  drug_count?: number;
}

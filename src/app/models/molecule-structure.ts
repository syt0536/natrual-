import {Target} from './target';

export interface MoleculeStructure {
  target_set?: Target[];
  psa?: string;
  mol_weight?: string;
  alogp?: string;
  mol?: string;
  hbd?: string;
  rtb?: string;
  hba?: string;
  formula?: string;
  id?: number;
  molecule_chembl_id?: string;
  molecule_chembl_id_url?: string;
  molecule_smile?: string
}

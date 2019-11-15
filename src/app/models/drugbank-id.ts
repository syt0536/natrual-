import {Target} from './target';

export interface DrugbankId {
  url?: string;
  drugbank_id?: string;
  id?: string;
  target_set?: Target[];
  smiles?: string;
  mol_block?: string;
  psa?: string;
  mol_weight?: string;
  alogp?: string;
  mol?: string;
  hbd?: string;
  rtb?: string;
  hba?: string;
  formula?: string;
  bfp?: string;
  generic_name?: string;
  synonyms?: string;
  jchem_iupac?: string;
  products?: string;
}

import {Target} from './target';

export interface Molecule {
  doc_doi?: string;
  doc_pubmed_id?: string;
  molecule_chembl_id_url?: string;
  activity_standard_value?: string;
  doc_pubmed_id_url?: string;
  activity_standard_units?: string;
  assay_chembl_id_url?: string;
  assay_assay_id?: string;
  id?: number;
  doc_chembl_id?: string;
  molecule_smile?: string;
  assay_chembl_id?: string;
  activity_pchembl_value?: string;
  activity_standard_type?: string;
  docs_title?: string;
  activity_doc_id?: string;
  molecule_chembl_id?: string;
  doc_chembl_id_url?: string;
  activity_assay_id?: string;
  assay_description?: string;
  target_set?: Target[];
  psa?: string;
  mol_weight?: string;
  alogp?: string;
  mol?: string;
  hbd?: string;
  rtb?: string;
  hba?: string;
  formula?: string
}

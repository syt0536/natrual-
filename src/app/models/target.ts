import {Drug} from './drug';
import {Pathway} from './pathway';
import {DrugbankId} from './drugbank-id';
import {Molecule} from './molecule';
import {MoleculeStructure} from './molecule-structure';

export interface Target {
  chemblid?: string;
  chembl_url?: string;
  kegg_url?: string;
  uniprot_accession?: string;
  keggid?: string;
  entry_name?: string;
  protein_description?: string;
  pdbid?: string;
  gene?: string;
  type?: string;
  id?: number;
  drug_set?: Drug[];
  pathway_set?: Pathway[];
  drugbankids?: DrugbankId[];
  chembl_small_molecules_all_infos?: Molecule[];
  chembl_small_molecules_structure_info?: MoleculeStructure[];
  bioactivity_count?: number;
  reference_count?: number;
  compound_count?: number
}

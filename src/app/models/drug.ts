import {Target} from './target';
import {Pathway} from './pathway';

export interface Drug {
   smiles?: string;
   drugbank_id?: string;
   IUPAC?: string;
   rtb?: number;
   psa?: string;
   mol_file?: string;
   drug_name?: string;
   mol_image?: string;
   mol_weight?: string;
   alogp?: string;
   id?: number;
   drugbank_url?: string;
   cid?: string;
   cas?: string;
   hbd?: number;
   first_created?: string;
   hba?: number;
   last_modified?: string;
   drug_state?: string;
   formula?: string;
   pathway_set?: Pathway[];
   targets?: Target[];
}


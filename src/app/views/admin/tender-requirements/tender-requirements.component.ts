import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-tender-requirements',
  templateUrl: './tender-requirements.component.html',
  styleUrls: ['./tender-requirements.component.scss']
})
export class TenderRequirementsComponent implements OnInit {
  loading = false;
  otherReq = '';
  tender;
  tenderRequirements = [
    {
      id: 0,
      required: true,
      requirement: 'Evidence of Registration/Incorporation with Corporate Affairs Commission (CAC) Certificate.'
    },
    {
      id: 0,
      required: true,
      requirement: 'CAC form 02'
    },
    {
      id: 0,
      required: true,
      requirement: 'CAC form 07'
    },
    {
      id: 0,
      required: true,
      requirement: 'Evidence of current Pension Compliance Certificate.'
    },
    {
      id: 0,
      required: true,
      requirement: 'Evidence of Company Income’s Tax Clearance Certificates.'
    },
    {
      id: 0,
      required: true,
      requirement: 'Evidence of current National Social Insurance Trust Fund (NSITF) Compliance Certificates.'
    },
    {
      id: 0,
      required: true,
      requirement: 'Evidence of current IRR certificate'
    },
    {
      id: 0,
      required: true,
      requirement: 'Evidence of Company’s Audited Accounts properly stamped and endorsed by a reputable Audit Firm for the year.'
    },
    {
      id: 0,
      required: true,
      requirement: 'Evidence of Financial capability to execute project with reference letter from a reputable bank indicating willingness to provide credit facility for project execution.'
    },
    {
      id: 0,
      required: true,
      requirement: 'Verifiable documentary evidence(s) of similar jobs successfully executed including award letter(s) and Completion Certificate(s).'
    },
    {
      id: 0,
      required: true,
      requirement: 'Verifiable documentary evidence(s) of similar jobs successfully executed including award letter(s) and Completion Certificate(s).'
    },
    {
      id: 0,
      required: true,
      requirement: 'Evidence of Ownership or Lease of Equipment, supported with MOU or receipt or invoice of purchase.'
    }
  ];

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.getTender();
    this.getRequirements();
  }

  getTender() {
    this.tender = this.companyService.getTender();
    console.log(this.tender);
  }

  onCheckChange(event, req) {
    this.tenderRequirements[req].required = !this.tenderRequirements[req].required;
    console.log(this.tenderRequirements);
  }

  getRequirements() {
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`api/tenderrequirement/allByTender/${this.tender.id}`, token).subscribe((res: any) => {
      console.log(res);
      if (res.length !== 0) {
        this.tenderRequirements = res;
      }
    }, err => console.log(err));
  }

  addTenderRequirements() {
    this.loading = true;
    const req = this.tenderRequirements;

    if (this.otherReq.trim() !== '') {
      req.push({
        id: 0,
        required: true,
        requirement: this.otherReq,
      });
    }

    const tenderRequirements = {
      tenderId: this.tender.id,
      tenderRequirementPojos: req,
    };
    this.crudService.postRequest('api/tenderrequirement/addMultiple', tenderRequirements).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      if (res.code === 0) {
        this.swalService.success(res.message);
      } else {
        this.swalService.error('An Error Occured');
      }
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('An Error Occured');
    });
  }
}




import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.scss']
})
export class CreateEquipmentComponent implements OnInit {
  equipmentForm: FormGroup;
  loading = false;
  fileUrl: string;
  uploadLoading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private form: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.equipmentForm = this.form.group({
      name: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  uploadDocument() {
    this.loading = true;
    if (this.fileUrl) {
      this.equipmentForm.value.imageUrl = this.fileUrl;
      this.equipmentForm.value.id = 0;
      this.equipmentForm.value.companyId = this.utilService.getCompany().id;
      this.crudService.postRequest('api/equipment/add', this.equipmentForm.value).subscribe((res: any) => {
        if (res.code === 0) {
          console.log(res);
          this.loading = false;
          this.swalService.success('Uploaded Successfully');
          this.router.navigate(['/contractor/company/equipments']);
        } else {
        this.swalService.error('An error occured');
      }
      }, err => {
        console.log(err);
        this.loading = false;
        this.swalService.error(err.message);
      });
    } else {
      this.loading = false;
      this.swalService.error('Could not upload file, file path is empty.');
    }
  }

  getUploadUrl(file) {
    this.uploadLoading = true;
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        this.uploadLoading = false;
        this.fileUrl = res.message;
        this.swalService.success('File path saved.');
      } else {
        this.swalService.error('An error occured');
      }
    }, err => {
      console.log(err);
      this.uploadLoading = false;
      this.swalService.error('Could not get file path.');
    });
  }


}

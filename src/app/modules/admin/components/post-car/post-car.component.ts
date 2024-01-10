import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';

import { Router } from '@angular/router';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrls: ['./post-car.component.css']
})
export class PostCarComponent implements OnInit {
  postCarForm!: FormGroup;
  isSpinning: boolean = false;
  selectedFile: File | null | undefined;
  imagePreview: string | ArrayBuffer | null | undefined;
  listOfBrands: string[] = ["BMW", "AUID", "SEAT", "TOYOTA", "VOLVO", "HONDA", "OPEL", "VOLKSWAGEN"];

  constructor(private fb: FormBuilder,
     private adminService: AdminService,
     private message:NzMessageService,
     private router: Router ) {}

  ngOnInit() {
    this.postCarForm = this.fb.group({
      brand: [null, Validators.required],
      model: [null, Validators.required],
      price: [null, Validators.required],
      availability: [null, Validators.required],
      year: [null, Validators.required],
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event?.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile!);
  }

  postCar() {
    console.log(this.postCarForm.value);
    this.isSpinning=true;
    const formData: FormData = new FormData();
    formData.append('image', this.selectedFile!);
    formData.append('brand', this.postCarForm.get('brand')!.value);
    formData.append('model', this.postCarForm.get('model')!.value);
    formData.append('year', this.postCarForm.get('year')!.value);
    formData.append('availability', this.postCarForm.get('availability')!.value);
    formData.append('price', this.postCarForm.get('price')!.value);

    console.log(formData);
    this.adminService.postCar(formData).subscribe((res)=>{
    this.isSpinning=false;
    this.message.success("Car posted successfully",{nzDuration:5000})
    this.router.navigateByUrl("/admin/dashboard");
    console.log(res);
    },error =>{
      this.message.error("Errow while posting car", { nzDuration:5000})
    })
  }



}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../../model/user.model';
declare var $:any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  myForm: FormGroup;
  validationMessages: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  isEdit = true;
  userInfo = new User();
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: [null],
      address: ['', [Validators.required]],
      city: [null],
      country: [null],
      postCode: ['', [Validators.required]],
      aboutme: [null]
    });
    this.validationMessages = {
      'companyName': [
        { type: 'required', message: 'A Company name is required.' },
      ],
      'name': [
        { type: 'required', message: 'A User name is required.' },
      ],
      'email': [
        { type: 'required', message: 'A Email is required.' },
        { type: 'email', message: 'Please enter valid email.' }
      ],
      'firstname': [
        { type: 'required', message: 'A First name is required.' },
      ],
      'lastname': [
        { type: 'required', message: 'A Last name is required.' },
      ],
      'address': [
        { type: 'required', message: 'Address is required.' },
      ],
      'city': [
        { type: 'required', message: 'A City is required.' },
      ],
      'country': [
        { type: 'required', message: 'A country is required.' },
      ],
      'postCode': [
        { type: 'required', message: 'A postal Code is required.' },
      ],
      'aboutme': [
        { type: 'required', message: 'About Me is required.' },
      ],
    };
    this.getCustomer();
    this.myForm.disable();
  }

  getCustomer() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    let request = {
      'e164s': [currentUser.account],
      'accounts': [currentUser.account]
    }
    this.userService.getCustomer(request).subscribe((res) => {
      if(res.retCode == 0){
        this.userInfo = res.infoCustomers[0];
        console.log(this.userInfo)
        this.myForm.controls['companyName'].setValue(this.userInfo.infoCustomerAdditional.companyName);
        this.myForm.controls['name'].setValue(this.userInfo.name);
        this.myForm.controls['email'].setValue(this.userInfo.infoCustomerAdditional.email);
        this.myForm.controls['firstname'].setValue(this.userInfo.infoCustomerAdditional.linkMan);
        this.myForm.controls['address'].setValue(this.userInfo.infoCustomerAdditional.address);
        this.myForm.controls['postCode'].setValue(this.userInfo.infoCustomerAdditional.postCode);
      }else{
        this.showNotification('danger', 'Server Error Please contact administrator', 'top','right', '');
      }
    });
  }

  editForm() {
    this.isEdit = false;
    this.myForm.enable();
  }

  save(form: FormGroup) {
    if (form.valid) {
      this.userInfo.infoCustomerAdditional.address = this.myForm.controls['address'].value;
      this.userInfo.infoCustomerAdditional.email = this.myForm.controls['email'].value;
      this.userInfo.infoCustomerAdditional.linkMan = this.myForm.controls['firstname'].value;
      this.userInfo.infoCustomerAdditional.postCode = this.myForm.controls['postCode'].value;
      this.userInfo.infoCustomerAdditional.companyName = this.myForm.controls['companyName'].value;
      this.userInfo.name = this.myForm.controls['name'].value;
      console.log(this.userInfo);
      this.userService.modifyCustomer(this.userInfo).subscribe((res) => {
        if(res.retCode == 0){
          this.showNotification('success', 'User profile update successfully', 'top','right', '');
          this.isEdit = true;
          this.myForm.disable();
        }else{
          this.showNotification('danger', 'Server Error Please contact administrator', 'top','right', '');
        }
      });
    }
  }

  hasValidationError(validation: any, controlName: (string | number)[]): boolean {
    const control: AbstractControl = this.myForm.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched);
  }

  showNotification(type: any, message: any, from: any, align: any, icon: any) {
    $.notify({
      icon: icon,
      message: message
    },{
        type: type,
        timer: 3000,
        placement: {
            from: from,
            align: align
        }
    });
}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
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
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      aboutme: ['', [Validators.required]]
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
      console.log(res.infoCustomers[0]);
      if(res.retCode == 0){
        let customerInfo = res.infoCustomers[0];
        this.myForm.controls['companyName'].setValue(customerInfo.infoCustomerAdditional.companyName);
        this.myForm.controls['name'].setValue(customerInfo.name);
        this.myForm.controls['email'].setValue(customerInfo.infoCustomerAdditional.email);
        this.myForm.controls['firstname'].setValue(customerInfo.infoCustomerAdditional.linkMan);
        this.myForm.controls['address'].setValue(customerInfo.infoCustomerAdditional.address);
        this.myForm.controls['postCode'].setValue(customerInfo.infoCustomerAdditional.postCode);
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
      let request = {

      }
      this.userService.modifyCustomer(request).subscribe((res) => {
       console.log(res);
      });
    }
  }

  hasValidationError(validation: any, controlName: (string | number)[]): boolean {
    const control: AbstractControl = this.myForm.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched);
  }

  clear(){
    this.myForm.reset();
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

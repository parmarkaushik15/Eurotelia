import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExtraService } from 'src/app/service/extra.service';
import { FormGroup } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-call-forward',
  templateUrl: './call-forward.component.html',
  styleUrls: ['./call-forward.component.css']
})
export class CallForwardComponent implements OnInit {
  myForm: FormGroup;
  validationMessages: any;
  constructor(private formBuilder: FormBuilder, private extraServices: ExtraService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      beginSecondInDayAll: ['', [Validators.required]],
      endSecondInDayAll: ['', [Validators.required]],
      forwordNumberAll: ['', [Validators.required]],
      beginSecondInDayMonday: ['', [Validators.required]],
      endSecondInDayMonday: ['', [Validators.required]],
      forwordNumberMonday: ['', [Validators.required]],
      beginSecondInDayTuesday: ['', [Validators.required]],
      endSecondInDayTuesday: ['', [Validators.required]],
      forwordNumberTuesday: ['', [Validators.required]],
      beginSecondInDayWednesday: ['', [Validators.required]],
      endSecondInDayWednesday: ['', [Validators.required]],
      forwordNumberWednesday: ['', [Validators.required]],
      beginSecondInDayThursday: ['', [Validators.required]],
      endSecondInDayThursday: ['', [Validators.required]],
      forwordNumberThursday: ['', [Validators.required]],
      beginSecondInDayFriday: ['', [Validators.required]],
      endSecondInDayFriday: ['', [Validators.required]],
      forwordNumberFriday: ['', [Validators.required]],
      beginSecondInDaySaturday: ['', [Validators.required]],
      endSecondInDaySaturday: ['', [Validators.required]],
      forwordNumberSaturday: ['', [Validators.required]],
      beginSecondInDaySunday: ['', [Validators.required]],
      endSecondInDaySunday: ['', [Validators.required]],
      forwordNumberSunday: ['', [Validators.required]],
      Active: ['', [Validators.required]],
      Active1: ['', [Validators.required]],
      Active2: ['', [Validators.required]],
      Active3: ['', [Validators.required]],
      Active4: ['', [Validators.required]],
      All: ['', [Validators.required]],
      Monday: ['', [Validators.required]],
      Tuesday: ['', [Validators.required]],
      Wednesday: ['', [Validators.required]],
      Thursday: ['', [Validators.required]],
      Friday: ['', [Validators.required]],
      Saturday: ['', [Validators.required]],
      Sunday: ['', [Validators.required]],
      active1: ['', [Validators.required]],
      active2 : ['', [Validators.required]],
      active3 : ['', [Validators.required]],
      active4 : ['', [Validators.required]]

    });

    //this.getPhone();


    $('.timepicker').datetimepicker({
      //          format: 'H:mm',    // use this format if you want the 24hours timepicker
      format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });
  }
  getPhone() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    let request = {
      'e164s': [currentUser.e164s],
      'accounts': [currentUser.accounts]
    }
    this.extraServices.getPhone(request).subscribe((res) => {
      if (res.retCode == 0) {
        //TODO Start
      } else {
        this.showNotification('danger', 'Server Error Please contact administrator', 'top', 'right', '');
      }
    });
  }
  hasValidationError(validation: any, controlName: (string | number)[]): boolean {
    const control: AbstractControl = this.myForm.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched);
  }
  
  showNotification(type: any, message: any, from: any, align: any, icon: any) {
    $.notify({
      icon: icon,
      message: message
    }, {
        type: type,
        timer: 3000,
        placement: {
          from: from,
          align: align
        }
      });
  }
  saveAll() {
    let beginSecondInDay = this.myForm.controls['beginSecondInDayAll'].value;
    let endSecondInDay = this.myForm.controls['endSecondInDayAll'].value;
    let forwordNumber = this.myForm.controls['forwordNumberAll'].value;
    console.log("Begin Second : " + beginSecondInDay + "  End Second : " + endSecondInDay + " Forword No : " + forwordNumber);
  }
  saveMonday() {
    let beginSecondInDay = this.myForm.controls['beginSecondInDayMonday'].value;
    let endSecondInDay = this.myForm.controls['endSecondInDayMonday'].value;
    let forwordNumber = this.myForm.controls['forwordNumberMonday'].value;
    console.log("Begin Second : " + beginSecondInDay + "  End Second : " + endSecondInDay + " Forword No : " + forwordNumber);
  }
  saveTuesday() {
    let beginSecondInDay = this.myForm.controls['beginSecondInDayTuesday'].value;
    let endSecondInDay = this.myForm.controls['endSecondInDayTuesday'].value;
    let forwordNumber = this.myForm.controls['forwordNumberTuesday'].value;
    console.log("Begin Second : " + beginSecondInDay + "  End Second : " + endSecondInDay + " Forword No : " + forwordNumber);
  }
  saveWednesday() {
    let beginSecondInDay = this.myForm.controls['beginSecondInDayWednesday'].value;
    let endSecondInDay = this.myForm.controls['endSecondInDayWednesday'].value;
    let forwordNumber = this.myForm.controls['forwordNumberWednesday'].value;
    console.log("Begin Second : " + beginSecondInDay + "  End Second : " + endSecondInDay + " Forword No : " + forwordNumber);
  }
  saveThursday() {
    let beginSecondInDay = this.myForm.controls['beginSecondInDayThursday'].value;
    let endSecondInDay = this.myForm.controls['endSecondInDayThursday'].value;
    let forwordNumber = this.myForm.controls['forwordNumberThursday'].value;
    console.log("Begin Second : " + beginSecondInDay + "  End Second : " + endSecondInDay + " Forword No : " + forwordNumber);
  }
  saveFriday() {
    let beginSecondInDay = this.myForm.controls['beginSecondInDayFriday'].value;
    let endSecondInDay = this.myForm.controls['endSecondInDayFriday'].value;
    let forwordNumber = this.myForm.controls['forwordNumberFriday'].value;
    console.log("Begin Second : " + beginSecondInDay + "  End Second : " + endSecondInDay + " Forword No : " + forwordNumber);
  }
  saveSaturday() {
    let beginSecondInDay = this.myForm.controls['beginSecondInDaySaturday'].value;
    let endSecondInDay = this.myForm.controls['endSecondInDaySaturday'].value;
    let forwordNumber = this.myForm.controls['forwordNumberSaturday'].value;
    console.log("Begin Second : " + beginSecondInDay + "  End Second : " + endSecondInDay + " Forword No : " + forwordNumber);
  }
  saveSunday() {
    let beginSecondInDay = this.myForm.controls['beginSecondInDaySunday'].value;
    let endSecondInDay = this.myForm.controls['endSecondInDaySunday'].value;
    let forwordNumber = this.myForm.controls['forwordNumberSunday'].value;
    console.log("Begin Second : " + beginSecondInDay + "  End Second : " + endSecondInDay + " Forword No : " + forwordNumber);
  }

}

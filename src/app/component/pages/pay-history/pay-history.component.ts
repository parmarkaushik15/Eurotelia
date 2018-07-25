import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormBuilder } from '@angular/forms';
import { ExtraService } from 'src/app/service/extra.service';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-pay-history',
  templateUrl: './pay-history.component.html',
  styleUrls: ['./pay-history.component.css']
})
export class PayHistoryComponent implements OnInit, AfterViewInit {
  myForm: FormGroup;
  validationMessages: any;
  constructor(private formBuilder: FormBuilder, private extraServices: ExtraService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    });
    this.validationMessages = {
      'startDate': [
        { type: 'required', message: 'A Start Date is required.' },
      ],
      'endDate': [
        { type: 'required', message: 'A End Date is required.' },
      ],
    };
  }
  getPayHistory(fDate, tDate) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    let request = {
      'account': [currentUser.account],
      'agentAccount': [currentUser.agentAccount],
      'beginTime': [fDate],
      'endTime': [tDate]
    }
    this.extraServices.getPayHistory(request).subscribe((res) => {
      if (res.retCode == 0) {
        //TODO Start
      } else {
        this.showNotification('danger', 'Server Error Please contact administrator', 'top', 'right', '');
      }
    });
  }

  getPayHistoryByDate() {
    let fDate = new Date(this.myForm.controls['startDate'].value).getTime;
    let tDate = new Date(this.myForm.controls['endDate'].value).getTime;
    console.log(fDate+"  :  "+tDate);
    this.getPayHistory(fDate, tDate);
  }

  // hasValidationError(validation: any, controlName: (string | number)[]): boolean {
  //   const control: AbstractControl = this.myForm.get(controlName);
  //   return control.hasError(validation.type) && (control.dirty || control.touched);
  // }

  ngAfterViewInit(): void {
    $('.datepicker').datetimepicker({
      format: 'MM/DD/YYYY',    //use this format if you want the 12hours timpiecker with AM/PM toggle
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
}

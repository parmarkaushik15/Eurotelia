import { Component, OnInit, ElementRef } from '@angular/core';
import { CountryCode } from '../../service/country-code';
declare var $:any;
import * as _ from 'google-libphonenumber';
import { Country } from '../../model/country.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../service/user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  test : Date = new Date();
  
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    selectedCountry: Country = new Country();
    myForm: FormGroup;
    private validationMessages: any;
    allCountries = [];
    validUser: Boolean;
    constructor(private element : ElementRef, 
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit(){
        this.checkFullPageBackgroundImage();

        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function(){
            $('.card').removeClass('card-hidden');
        }, 700)
        this.fetchCountryData();

        this.myForm = this.formBuilder.group({
            phoneNumber: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
        this.validationMessages = {
            'phoneNumber': [
                {type: 'required', message: 'A Phone number is required.'},
            ],
            'password': [
                {type: 'required', message: 'A Password is required.'},
            ]
        };

    }
    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    public onCountrySelect(country: Country, el): void {
        this.selectedCountry = country;
    }

    fetchCountryData(): void {
        CountryCode.allCountries.forEach(c => {
          let country = new Country();
          country.name = c[0].toString();
          country.iso2 = c[1].toString();
          country.dialCode = c[2].toString();
          country.priority = +c[3] || 0;
          country.areaCode = +c[4] || null;
          country.flagClass = country.iso2.toLocaleLowerCase();
          country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
          this.allCountries.push(country);
        });
        this.selectedCountry = this.allCountries[97];
      }
      protected getPhoneNumberPlaceHolder(countryCode: string): string {
        const phoneUtil = _.PhoneNumberUtil.getInstance();
        const pnf = _.PhoneNumberFormat;
        try {
          let phoneNumber = phoneUtil.parse('2236512366', countryCode);
          return phoneUtil.format(phoneNumber, pnf.INTERNATIONAL);
        } catch (e) {
          console.log('CountryCode: "' + countryCode + '" ' + e);
          return e;
        }
      }
      
      public onInputKeyPress(event): void {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
      }
      
    hasValidationError(validation: any, controlName: (string | number)[]): boolean {
        const control: AbstractControl = this.myForm.get(controlName);
        return control.hasError(validation.type) && (control.dirty || control.touched);
    }

    login(form: FormGroup) {
        if(form.valid){
            let request = {
                'e164s':[form.controls['phoneNumber'].value],
                'accounts':[form.controls['phoneNumber'].value]
            }
            this.userService.getPhone(request).subscribe((res) => {
                this.validateLogin(res);
            });  
        }
    }

    validateLogin(res: any): any {
        this.validUser = false;
        if(res.retCode == 0 && res.infoPhones.length != 0){
            res.infoPhones.forEach(element => {
                if(element.password == this.myForm.controls['password'].value) {
                    this.validUser = true;
                }
            });
            if(this.validUser) {
                localStorage.setItem('currentUser', res);
                this.router.navigate(['/app/dashboard']);
            }else{
                this.showNotification('danger', 'Your Password is not valid', 'top','right', '');
            }
        }else{
            this.showNotification('danger', 'Your phone number is not valid', 'top','right', '');
        }
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

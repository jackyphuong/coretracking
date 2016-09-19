import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Setting } from './setting';
import RefData from '../mockData/refdata.mock';

@Component({
    templateUrl: 'client/administration/setting.component.html'
})

export class SettingComponent implements OnInit {

    securityForm: FormGroup;
    settingModel: Setting;
    timezones = RefData.timezone;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
        //Todo load data from service
        this.settingModel = new Setting('Hawaiian Standard Time', true, false, false,true, 6, 20, false, false, false);

        this.buildForm();

        this.securityForm.valueChanges
            .subscribe(data => this.onValueChanged(this.securityForm, data));

        this.onValueChanged(this.securityForm); //(re)set validation messages now
    }

    buildForm(): void {
        this.securityForm = this.fb.group({
            timezone:[this.settingModel.timezone],
            allowUserRegister: [this.settingModel.allowUserRegister],
            activeNewRegisterByDefault: [this.settingModel.activeNewRegisterByDefault],
            useSecurityImage: [this.settingModel.useSecurityImage],
            requiredConfirmEmailForLogin: [this.settingModel.requiredConfirmEmailForLogin],
            minPasswordLength: [this.settingModel.minPasswordlength, Validators.compose([Validators.required])],
            maxPasswordLength: [this.settingModel.maxPasswordLength, Validators.compose([Validators.required])],
            useLowerCaseInPassword: [this.settingModel.useLowerCaseInPassword],
            useNumerInPassword: [this.settingModel.useNumberInPassword],
            useUpperCaseInPassword: [this.settingModel.useUpperCaseInPassword]

        });
    }

    onSubmit(securitySetting: Setting) {
        console.log(securitySetting);
    }

    onValueChanged(processForm: FormGroup, data?: any) {
        if (!processForm) { return; }

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = processForm.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'minPasswordLength': '',
        'maxPasswordLength': ''
    };

    validationMessages = {
        'minPasswordLength': {
            'required': 'This field is required.',
            'minlength': 'Must be at least 6 characters long.'            
        },
        'maxPasswordLength': {
            'required': 'This field is required.',
             'maxlength': 'Cannot be more than 20 characters long.'
        }
    };
}
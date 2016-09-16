import { Component  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Setting } from './setting';

@Component({
    templateUrl: 'client/administration/setting.component.html'
})

export class SettingComponent {

    model = new Setting(6, 10);

    submitted = false;

    securityForm = new FormGroup({
        minPasswordLength: new FormControl('', Validators.compose([Validators.required])),
        maxPasswordLength: new FormControl('', Validators.compose([Validators.required]))
    });

    onSubmit(securitySetting: Setting) {
        this.submitted = true;
        console.log(securitySetting);
    }

    // //TODO: remove this when done
    get diagnostic(){
        return JSON.stringify(this.model);
    }

}
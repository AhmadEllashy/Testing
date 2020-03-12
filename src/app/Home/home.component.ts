import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SpaceValidation } from '../space_Validation';
import { R_Email } from '../Async_Validation';

@Component({
    selector: "home-component",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css", "../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})

export class HomeComponent {
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            email : new FormControl('',[CustomValidators.email,R_Email.EmailValidation]),
            password :new FormControl('',SpaceValidation.Space)
            
        })
    }

    // MyClick(password) {
    //     console.log(password)
    // }



}
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  invalidCredMessage: string;
  constructor(public router: Router, private tokenService:TokenService, private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$')]],
      password: ['', [Validators.required]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value.email, this.loginForm.value.password);
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // else if(this.loginForm.value.email == 'admin@admin.com' && this.loginForm.value.password == '1234546789') {
      const payLoad = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        device_type: 'website'
      };
      const token = 1234567890;
      this.tokenService.handle(token);
      this.tokenService.sendUserData(JSON.stringify(payLoad));
      this.router.navigate(['/dashboard']);
    // } else {
      // this.invalidCredMessage = 'Wrong Credentials';
    // }
  }

}

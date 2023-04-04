import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup = new FormGroup({
    userEmail: new FormControl(''),
    userPwd: new FormControl('')
  });

  constructor(public authService: AuthService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPwd: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]],
    },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      alert('Please fill all the required fields!');
      return;
    }

    this.authService.SignUp(this.form.value.userEmail, this.form.value.userPwd);
    alert("Great!!");
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.form.reset();
  }   
}
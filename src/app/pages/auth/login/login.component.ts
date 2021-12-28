import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',
  // '../../../../assets/css/bootstrap_main.17a8f92d474484b389e1.css',
  // '../../../../assets/css/bootstrap_qr-b73de5ee9feebb11c509.css',
  // '../../../../assets/css/stylex-0618087322cea5b5c4e95330c297437d.css'
  ]
})

export class LoginComponent implements OnInit {

  _user = {
    mail: 'admin@demo.com',
    mdp: 'pass'
  }

  _load = false;
  //@ts-ignore
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        this._user.mail,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      password: [
        this._user.mdp,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  submit() {

    const control = this.loginForm.controls;

    //@ts-ignore
    if(control.email.value != this._user.mail && control.password.value != this._user.mdp) {
      return
    }

    this._load = true;

    setTimeout(() => {
      localStorage.setItem('pilot_Chat_token', 'df486zf6.86zef86zefozef8886ef_6df')
      this._router.navigate(['/'])
    }, 1500);

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: any;

  constructor(private _authService: AuthServiceService,
    private _router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.formGroup = new FormGroup({
      site_id: new FormControl('', [Validators.required]),
      user_id: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginProcess() {
    if (this.formGroup.valid) {
      this._authService.login(this.formGroup.value).subscribe(
        res => {
          localStorage.setItem("token", res.token);
          this._router.navigate(['/travellers']);
        },
        err => alert(err.error.message)
      )
    }
  }
}

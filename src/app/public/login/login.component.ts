import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  credencialsCorrect = true;
  loginStatus;
  messageStatus;
  constructor(private formBuilder: FormBuilder, public userServ: UserService, public router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser') == "true"){
      this.router.navigate(['/home']);
    }
    this.loginForm = this.formBuilder.group({
      client_id: ['', [Validators.required]],
      client_secret: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.userServ.login(this.loginForm.value).subscribe(data => { 
        // console.log(data.body.response.access_token);
        let token = data.body.response.access_token;
        localStorage.setItem("token", `${token}`);
        localStorage.setItem("currentUser", "true");
        this.router.navigate(['/home']);
      }, error => {
        this.credencialsCorrect = false;
      })
  }

}

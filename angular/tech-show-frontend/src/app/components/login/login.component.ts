import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  title = "Login";

  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      response => {
        this.authService.setToken(response.body.token);
        // alert("Logged in!!");
        this.router.navigate(['books'])
      },
      error => {
        console.log(error);
        alert(`Log in falied! Error: ${error}`);
      }
    );
  }
}

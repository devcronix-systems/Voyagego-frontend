import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voyagego';
  formGroup = this.fb.group({
    login: ['', []],
    password: ['', []]
  });

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

    login() {
      const val = this.formGroup.value;

      if (val.email && val.password) {
          this.authService.login(val.email, val.password)
              .subscribe(
                  () => {
                      console.log("User is logged in");
                      this.router.navigateByUrl('/');
                  }
              );
      }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }
}

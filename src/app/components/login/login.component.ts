import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModules } from '../../modules/shared.module';
import { MaterialModules } from '../../modules/material.module';

@Component({
  selector: 'app-login',
  imports: [RouterLink,
    SharedModules,
    MaterialModules
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username && this.password) {
      console.log('Form Submitted!', { username: this.username, password: this.password });
    } else {
      console.log('Please fill out both fields');
    }
  }
}




import { Component } from '@angular/core';
import { SharedModules } from '../../modules/shared.module';
import { MaterialModules } from '../../modules/material.module';

@Component({
  selector: 'app-welcome',
  imports: [
    SharedModules,
    MaterialModules
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}

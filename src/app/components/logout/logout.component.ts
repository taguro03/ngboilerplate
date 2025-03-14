import { Component } from '@angular/core';
import { SharedModules } from '../../modules/shared.module';
import { MaterialModules } from '../../modules/material.module';

@Component({
  selector: 'app-logout',
  imports: [SharedModules,
    MaterialModules
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModules } from '../../modules/shared.module';
import { MaterialModules } from '../../modules/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    SharedModules,
    MaterialModules
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

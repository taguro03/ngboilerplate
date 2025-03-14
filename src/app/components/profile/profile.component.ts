import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { MaterialModules } from '../../modules/material.module';
import { SharedModules } from '../../modules/shared.module';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-profile',
  providers: [provideNativeDateAdapter()],
  imports: [
    SharedModules,
    MaterialModules,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
  
})
export class ProfileComponent {
  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }

}



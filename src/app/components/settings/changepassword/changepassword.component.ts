import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedModules } from '../../../modules/shared.module';
import { MaterialModules } from '../../../modules/material.module';

@Component({
  selector: 'app-changepassword',
  imports: [
    SharedModules,
    MaterialModules
  ],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.scss'
})
export class ChangepasswordComponent {

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(public dialogRef: MatDialogRef<ChangepasswordComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.newPassword === this.confirmPassword) {
      this.dialogRef.close(true);
    } else {
      alert('Passwords do not match!');
    }
  }

}

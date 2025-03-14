import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedModules } from '../../../modules/shared.module';
import { MaterialModules } from '../../../modules/material.module';

@Component({
  selector: 'app-editprofile',
  imports: [
    SharedModules,
    MaterialModules
  ],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.scss'
})
export class EditprofileComponent {

  username: string = '';
  email: string = '';

  constructor(public dialogRef: MatDialogRef<EditprofileComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(true);
  }

}

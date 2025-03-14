import { Component } from '@angular/core';
import { SharedModules } from '../../modules/shared.module';
import { MaterialModules } from '../../modules/material.module';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  imports: [
    SharedModules,
    MaterialModules
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor(public dialog: MatDialog) { }

  openChangePasswordDialog(): void {
    const dialogRef = this.dialog.open(ChangepasswordComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert('Password changed successfully!');
      }
    });
  }

  openEditProfileDialog(): void {
    const dialogRef = this.dialog.open(EditprofileComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert('Profile updated successfully!');
      }
    });
  }
}

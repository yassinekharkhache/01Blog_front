// import { Component } from '@angular/core';
// import { MatDialogContent } from '@angular/material/dialog';
// import { MatFormField, MatLabel } from '@angular/material/form-field';

// @Component({
//   selector: 'app-login-dialog',
//   imports: [MatFormField,MatLabel,MatDialogContent],
//   templateUrl: './login-dialog.html',
//   styleUrls: ['./login-dialog.css']
// })
// export class LoginDialog {

// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.html',
  styleUrls: ['./login-dialog.css'],
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink]
})
export class LoginDialog {
  email = '';
  password = '';

  constructor(private dialogRef: MatDialogRef<LoginDialog>) {}

  submit() {
    // Replace with real auth logic
    this.dialogRef.close({ email: this.email, password: this.password });
  }
}

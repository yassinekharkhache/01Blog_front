import { Component,Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
// ngif
import { NgIf } from '@angular/common';
import { LoginDialog } from '../auth/login-dialog/login-dialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-side-bar',
  imports: [MatListModule, MatButtonModule, RouterLink,MatButtonModule,MatIconModule, NgIf,LoginDialog],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar {
  @Input() expanded = false;
  constructor(private dialog: MatDialog) {}
  openLogin() {
  this.dialog.open(LoginDialog, { width: '350px' })
      .afterClosed().subscribe(result => {
        if (result) console.log('User logged in:', result);
      });
}
}

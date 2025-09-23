import { Component,Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
// ngif
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-side-bar',
  imports: [MatListModule, MatButtonModule, RouterLink,MatButtonModule,MatIconModule, NgIf],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar {
  @Input() expanded = false;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
// import {}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbar, MatIconModule],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css']
})
export class NavBarComponent {
  @Input() expanded = false;
  @Output() menuToggle = new EventEmitter<void>();
}

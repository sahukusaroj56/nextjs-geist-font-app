import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    { icon: '🏠', label: 'Dashboard' },
    { icon: '👩‍🏫', label: 'Teachers' },
    { icon: '👨‍🎓', label: 'Students', active: true },
    { icon: '💰', label: 'Finance' },
    { icon: '📅', label: 'Calendar' },
    { icon: '📋', label: 'Time Table' },
    { icon: '✉️', label: 'Message' },
    { icon: '⚙️', label: 'Settings' }
  ];
}

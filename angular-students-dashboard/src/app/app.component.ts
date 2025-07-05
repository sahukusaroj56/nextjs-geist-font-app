import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container flex h-screen bg-gray-100 text-gray-900">
      <app-sidebar></app-sidebar>
      <div class="flex-1 flex flex-col">
        <app-header></app-header>
        <main class="p-6 overflow-auto flex-1">
          <app-students></app-students>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      font-family: 'Inter', sans-serif;
    }
  `]
})
export class AppComponent {}

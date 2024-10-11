import { Injectable, Signal, signal } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarVisible = signal(true);
  private activeUrl = signal('');

  getSidebarVisible(): Signal<boolean> {
    return this.sidebarVisible.asReadonly();
  }

  getActiveUrl(): Signal<string> {
    return this.activeUrl.asReadonly();
  }

  toggleSidebar(): void {
    this.sidebarVisible.update(value => !value);
  }

  setCurrentNavigation(navigation: NavigationEnd): void {
    this.activeUrl.set(navigation.url);
  }
}

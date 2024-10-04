import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private navbarVisible = signal(true);

  getNavbarVisible() {
    return this.navbarVisible.asReadonly();
  }

  toggleNavbar() {
    this.navbarVisible.update(value => !value);
  }
}

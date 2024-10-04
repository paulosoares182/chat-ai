import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { ThemeService } from '../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  darkMode: boolean;

  constructor(
    private navbarService: NavbarService,
    private themeService: ThemeService,
    private router: Router) { 
      this.darkMode = this.themeService.getCurrentTheme() == 'dark';
    }

  toggleNavbar(): void {
    this.navbarService.toggleNavbar();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleDropdownContent(dropdownContent: HTMLDivElement): void {
    dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
  }

  logout(): void {
    this.router.navigate(['/login'])
  }
}

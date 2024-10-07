import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { ThemeService } from '../services/theme.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchService } from '../services/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  darkMode: boolean;
  searchText: string = "";

  constructor(
    private navbarService: NavbarService,
    private themeService: ThemeService,
    private searchService: SearchService,
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

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      
      this.searchService.updateSearch(this.searchText);
    }
  }

  logout(): void {
    this.router.navigate(['/login'])
  }
}
